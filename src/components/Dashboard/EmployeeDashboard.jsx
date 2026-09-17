import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({changeUser, data, darkMode, setDarkMode}) => {

  return (
   <div className={darkMode ? "bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
        
        <Header changeUser={changeUser} data={data} darkMode={darkMode} setDarkMode={setDarkMode}/>
        <TaskListNumbers data={data} />
        <TaskList data={data} />
    </div>
  )
}

export default EmployeeDashboard