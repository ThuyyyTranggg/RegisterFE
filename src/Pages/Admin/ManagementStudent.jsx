import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/SidebarAdmin'
import Datatable from '../../components/dataTable/Datatable'
import './ManagermentStudent.scss'
import { Kanban } from '@syncfusion/ej2-react-kanban'


function ManagementStudent() {
  return (
    <div className='manaStudentOfAdmin'>
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Datatable />
                </div>
            </div>
        </div>
  )
}

export default ManagementStudent