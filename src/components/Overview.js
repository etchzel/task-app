import React from 'react';
import Form from './Form';
import './Overview.css';

const ListElement = ({ task, _handleDelete }) => {
  const listContent = `${task.text} (Task No: ${task.taskNo})\t`;

  const submitEdit = (e) => {
    e.preventDefault();
    document.getElementById(`${task.id}`).value='';
    return;
  };

  const editChanges = () => {
    return;
  }

  const editButtonHandler = (id) => {
    document.getElementById(id).parentElement.classList.remove('hidden');
  }

  return (
    <li task={task}>
      <div className="list-content-container">
        <p>{listContent}</p>
        <span 
          className="far fa-edit"
          onClick={() => editButtonHandler(task.id)}
        />
        <span 
          className="far fa-trash-alt"
          onClick={() => _handleDelete(task.id)}/>
        <Form
          task={task}
          formType={0}
          _handleSubmit={submitEdit}
          _handleChange={editChanges}
        />
      </div>
    </li>
  );
};

const Overview = (props) => {
  const { tasks, _handleDelete } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <ListElement 
            key={task.id}
            task={task}
            _handleDelete={_handleDelete}
          />
        );
      })}
    </ul>
  );
};

export default Overview;