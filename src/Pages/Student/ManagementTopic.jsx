import React from 'react'
import SidebarStudent from '../../components/Sidebar/SidebarStudent'
import './ManagementTopic.scss'
import Navbar from '../../components/Navbar/Navbar'
import KanbanColumn from '../../components/Kanban/Column'
import { KanbanBoardContainer, KanbanBoard } from '../../components/Kanban/Board'
import KanbanItem from '../../components/Kanban/Card'
import { useList } from '@refinedev/core';


function ManagementTopic() {

  return (
    <div className='ManagementTopic'>
      <SidebarStudent />
      <div className='homeContainer'>
        <Navbar></Navbar>
        <hr />
        <div className='widgets'>
          <KanbanBoardContainer>
            <KanbanBoard>
              <KanbanColumn>
                <KanbanItem>
                  This is my fisrt to do 
                </KanbanItem>
              </KanbanColumn>
              <KanbanColumn>

              </KanbanColumn>

            </KanbanBoard>
          </KanbanBoardContainer>
        </div>
      </div>
 
    </div>
  )
}

export default ManagementTopic