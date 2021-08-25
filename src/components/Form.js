import React from 'react';

const Form = (props) => {
  const {
    task,
    formType,
    _handleSubmit,
    _handleChange,
  } = props

  // use the task id if the form is generated through edit button
  const inputId = `${task ? task.id : 'taskInput'}`;
  const defaultHidden = `${formType ? '' : 'hidden'}`;

  return (
    <form 
      onSubmit={_handleSubmit}
      className={`input-form ${defaultHidden}`}
    >
      <label htmlFor={inputId}>
        {`${formType ? 'Enter' : 'Edit'} task`}
      </label>
      <input 
        type="text"
        id={inputId}
        onChange={_handleChange}
      />
      <button type="submit">
        {`${formType ? 'Add Task' : 'Submit Changes'}`}
      </button>
    </form>
  );
};

export default Form;