import React from 'react'
import './homeStudent.scss'
import SidebarStudent from '../../components/Sidebar/SidebarStudent'
import Navbar from '../../components/Navbar/Navbar'

function HomeStudent() {
  return (
    <div className='HomeStudent'>
        <SidebarStudent/>
        <div className='context'>
          <Navbar/>
          <hr/>
        </div>
    </div>
  )
}

export default HomeStudent