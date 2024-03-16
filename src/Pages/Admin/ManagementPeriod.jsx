import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/SidebarAdmin'
import './ManagementPeriod.scss'
import DatatableLec from '../../components/dataTable/DatatableLec'

function ManagementPeriod() {
    return (
        <div>
            <div className='manaStudentOfAdmin'>
                <Sidebar />
                <div className="homeContainer">
                    <Navbar />
                    <hr />
                    <div className="widgets">
                        Period
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ManagementPeriod