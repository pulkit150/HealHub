import { createContext, useEffect, useReducer, useContext } from "react";

const getUserFromLocalStorage = () => {
    const storedUser = localStorage.getItem('user');
    if (!storedUser) return null;

    try {
        return JSON.parse(storedUser);
    } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        return null; // Return null if JSON is invalid
    }
};

const initialState = {
    user: getUserFromLocalStorage(),
    role: localStorage.getItem('role') || null,
    token: localStorage.getItem('token') || null,
};

export const authContext = createContext(initialState);

const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                role: null,
                token: null,
            };

        case "LOGIN_SUCCESS":
            return {
                user: action.payload.user,
                role: action.payload.role,
                token: action.payload.token,
            };

        case "LOGOUT":
            return {
                user: null,
                role: null,
                token: null,
            };

        default:
            return state;
    }
};

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    //storing login details in localStorage so that it not vanishes when we refresh
    //whenever authentication state changes it updates localStorage
    //it ensures that userdata is persistent even if user refreshes
    useEffect(()=>{
        localStorage.setItem('user', JSON.stringify(state.user))
        localStorage.setItem('token', state.token)
        localStorage.setItem('role', state.role)

    },[state]);

    return (
        <authContext.Provider
            value={{
                user: state.user,
                token: state.token,
                role: state.role,
                dispatch
            }}
        >
            {children}
        </authContext.Provider>)
}

