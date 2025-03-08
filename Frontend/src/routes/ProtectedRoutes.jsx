import { useContext } from 'react'
import { authContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({children, allowedRoles}) => {

    const { token , role} = useContext(authContext);

    //checks the array if the role person is allowed or not
    const isAllowed = allowedRoles.includes(role);
    const accessibleRoute = token && isAllowed ? children : <Navigate to="/login" replace={true} />

    return accessibleRoute;
}

export default ProtectedRoutes
