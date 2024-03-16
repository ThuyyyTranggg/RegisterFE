import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/SidebarAdmin'
import './ManagementYears.scss'
import DatatableLec from '../../components/dataTable/DatatableLec'

function ManagementYears() {
    return (
        <div>
            <div className='manaStudentOfAdmin'>
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <hr />
                    <div className="widgets">
                        Year
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManagementYears