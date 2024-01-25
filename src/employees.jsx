import React from 'react'
// import ReactDOM from 'react-dom'
import {createRoot} from 'react-dom/client'
import EmployeeList from './EmployeeList.jsx'
import EmployeeFilter from './EmployeeFilter.jsx'
import EmployeeTable from './EmployeeTable.jsx'
import EmployeeRow from './EmployeeRow.jsx'
import EmployeeAdd from './EmployeeAdd.jsx'

const root = createRoot(document.getElementById('content'))
root.render(
  <React.StrictMode>
    <EmployeeList />
  </React.StrictMode>,
)