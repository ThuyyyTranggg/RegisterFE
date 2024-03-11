import { useDroppable } from '@dnd-kit/core'
import { AddOutlined, HdrPlusOutlined, PlaceOutlined, PlusOneOutlined } from '@mui/icons-material'
import { Badge, Button, Flex, Space } from 'antd'
import React from 'react'

const KanbanColumn = ({children}) => {
    const {isOver, setNodeRef, active} = useDroppable({
        id:'',
        data:''
    })

    const count = 2;

    const description = 'Description'
    const title = 'TITLE'

    const onAddClickHandler = () =>{}
   
  return (
    <div ref={setNodeRef}
        style={{display:'flex', flexDirection:'column', padding:'0 16px'}}
    >
        <div style={{padding:'12px'}}>
            <Space style={{width:'100%', justifyContent:'space-between'}}>
                <Space>
                    <div ellipsis={{tooltip: title}}>
                        {title}
                    </div>
                    {!!count && <Badge count={count} color='cyan'/>}
                </Space>
                <Button shape='circle ' icon={<AddOutlined/>} onClick={onAddClickHandler}>
                </Button>
            </Space>
            {description}
        </div>
        <div style={{flex:1, overflowY: active ? 'unset':'scroll', border:'2px dashed red', borderColor: isOver ? '#000040':'transparent', borderRadius:'4px'}}>
            <div style={{marginTop:'12px', display:'flex', flexDirection:'column', gap: '8px'}}>
                {children}
            </div>
        </div>
    </div>
  )
}

export default KanbanColumn