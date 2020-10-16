import React from 'react';

const InputField = (props) => {
  return (
    <React.Fragment>
      <div className='form-group'>
        <label className='h6'>{props.label}</label>
        <input type={props.type} className='form-control' />
        <small className='form-text text-muted'>{props.description}</small>
      </div>
    </React.Fragment>
  );
};

export default InputField;
