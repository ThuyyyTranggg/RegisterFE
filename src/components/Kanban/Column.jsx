import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Card from './Card'; 

const Column = ({title, tasks, droppableId }) => {
  return (
    <Droppable droppableId={droppableId}>
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className="column"
          style={{ background: '#f7f7f7', padding: '8px', width: '300px' }}
        >
          <h5>{title}</h5>
          {tasks.map((task, index) => (
            <Card key={task.taskId} task={task} index={index} /> // Use Card component
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default Column;
