import { DndContext } from '@dnd-kit/core'
import React, { Children } from 'react'

export const KanbanBoardContainer = ({children})=> {
  return (
    <div style={{width:'calc(100% +64px)', height: 'calc(100hv -64px)', display:'flex', justifyContent:'column', margin:'-32px'}}>
      <div style={{width:'100%', height:'100%', display:'flex', padding:'32px', overflow:'scroll' }}>
        {children}
      </div>
      
    </div>
  )
}

export const KanbanBoard =({children}) => {
  return (
    <DndContext>
      {children}
    </DndContext>
  )
}