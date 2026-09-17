import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import AllTask from '../other/AllTask'

const AdminDashboard = ({changeUser, darkMode, setDarkMode}) => {
    return (
        <div className={`h-screen p-7 ${
    darkMode
        ? "bg-[#1C1C1C] text-white"
        : "bg-white text-black"
}`}>
            <Header changeUser={changeUser}
            darkMode={darkMode} 
            setDarkMode={setDarkMode}
            />
            <CreateTask />
            <AllTask />
        </div>
    )
}

export default AdminDashboard