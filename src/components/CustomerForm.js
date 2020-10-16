import React from 'react';
import InputField from '../common-components/InputField';

const CustomerForm = (props) => {
  const inputElementsCollection = [
    {
      label: 'Name',
      type: 'text',
      description: 'Name of the customer',
    },
    {
      label: 'Address Line 1',
      type: 'text',
      description: 'Flat number, Apartment Name, etc',
    },
    {
      label: 'Address Line 2',
      type: 'text',
      description: 'Locality',
    },
    {
      label: 'Address Line 3',
      type: 'text',
      description: 'Landmark, etc',
    },
    {
      label: 'City',
      type: 'text',
    },
    {
      label: 'Phone Number',
      type: 'number',
      description: '10 digits for mobile number',
    },
    {
      label: 'Email',
      type: 'email',
      description: 'Primary email of the customer',
    },
    {
      label: 'GSTIN',
      type: 'text',
      description: 'GSTIN of the customer (optional)',
    },
  ];
  return (
    <React.Fragment>
      <div>
        <h2>Create Customer</h2>
        <hr />
        {inputElementsCollection.map((el, i) => {
          return (
            <InputField
              key={i}
              label={el.label}
              type={el.type}
              description={el.description}
            />
          );
        })}

        <div className='row'>
          <div className='col'>
            <button className='btn btn-info float-left'>Reset</button>
            <button className='btn btn-success float-right'>Submit</button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CustomerForm;
