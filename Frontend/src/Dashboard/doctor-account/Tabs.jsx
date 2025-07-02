import React, { useState, useContext } from 'react';
import { BiMenu } from 'react-icons/bi';
import { authContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Tabs = ({ tab, setTab }) => {
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState(false); // ✅ toggle state

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  const tabButtons = (
    <>
      <button
        onClick={() => setTab("overview")}
        className={`${
          tab === "overview"
            ? "bg-indigo-100 text-primaryColor"
            : "bg-transparent text-headingColor"
        } w-full btn mt-0 rounded-md`}
      >
        Overview
      </button>
      <button
        onClick={() => setTab("appointments")}
        className={`${
          tab === "appointments"
            ? "bg-indigo-100 text-primaryColor"
            : "bg-transparent text-headingColor"
        } w-full btn mt-0 rounded-md`}
      >
        Appointments
      </button>
      <button
        onClick={() => setTab("settings")}
        className={`${
          tab === "settings"
            ? "bg-indigo-100 text-primaryColor"
            : "bg-transparent text-headingColor"
        } w-full btn mt-0 rounded-md`}
      >
        Profile
      </button>

      <div className="mt-[50px] md:mt-[100px]">
        <button
          onClick={handleLogout}
          className="w-full bg-[#181A1E] p-3 text-[16px] leading-7 rounded-md text-white"
        >
          Logout
        </button>
        <button className="w-full bg-red-600 mt-4 p-3 text-[16px] leading-7 rounded-md text-white">
          Delete Account
        </button>
      </div>
    </>
  );

  return (
    <div>
      {/* Hamburger for mobile */}
      <span className="lg:hidden" onClick={() => setShowSidebar(!showSidebar)}>
        <BiMenu className="w-6 h-6 cursor-pointer" />
      </span>

      {/* Sidebar for large screens */}
      <div className="hidden lg:flex flex-col p-[30px] bg-white shadow-md rounded-md items-center h-max">
        {tabButtons}
      </div>

      {/* Sidebar for small screens (toggle visible) */}
      {showSidebar && (
        <div className="flex lg:hidden flex-col mt-4 p-[20px] bg-white shadow-md rounded-md items-center h-max">
          {tabButtons}
        </div>
      )}
    </div>
  );
};

export default Tabs;
