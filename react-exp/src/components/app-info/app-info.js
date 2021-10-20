import React from 'react'

import './app-info.css'

const AppInfo = ({employees, increased}) => {
  return (
    <div className="app-info">
      <h2>Count employees in the company</h2>
      <h2>The total numbers of employees: {employees} </h2>
      <h2>Reward gets: {increased}</h2>
    </div>
  )
}

export default AppInfo
