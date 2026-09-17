import React from "react";

const Header = ({ changeUser, darkMode, setDarkMode }) => {

  const logoutUser = () => {
    localStorage.setItem("loggedInUser", "");
    changeUser("");
  };

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div
      className={`flex items-center justify-between p-5 min-h-[100px] ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-black"
      }`}
    >

      {/* LEFT SIDE */}
      <div>
        <h1
          className={`text-2xl font-bold ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Hello
          <br />

          <span
            className={`text-xl font-semibold ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
             SAJJAD Task Manager 💧
          </span>
        </h1>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-3">

        <button
          onClick={toggleTheme}
          className="px-4 py-2 rounded bg-blue-500 text-white"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>

        <button
          onClick={logoutUser}
          className="px-4 py-2 rounded bg-red-500 text-white"
        >
          Log Out
        </button>

      </div>

    </div>
  );
};

export default Header;


