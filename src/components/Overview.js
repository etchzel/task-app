import React, { useState } from 'react';
import Form from './Form';
import './Overview.css';

const ListElement = ({ task, _handleDelete, _handleEdit }) => {
  const [edit, setEdit] = useState(task.text);

  const listContent = `${edit} (Task No: ${task.taskNo})\t`;

  const submitEdit = (e) => {
    e.preventDefault();
    _handleEdit(edit, task.id);
    document.getElementById(`${task.id}`).value='';
    document.getElementById(task.id).parentElement.classList.add('hidden');
  };

  const editChanges = (e) => {
    setEdit(e.target.value);
  }

  const editButtonHandler = (id) => {
    document.getElementById(id).parentElement.classList.remove('hidden');
  }

  return (
    <li>
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
  const { tasks, _handleDelete, _handleEdit } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <ListElement 
            key={task.id}
            task={task}
            _handleDelete={_handleDelete}
            _handleEdit={_handleEdit}
          />
        );
      })}
    </ul>
  );
};

export default Overview;