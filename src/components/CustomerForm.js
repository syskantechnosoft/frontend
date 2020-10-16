import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import InputField from '../common-components/InputField';
import { httpClient } from '../utils/http-client';

const CustomerForm = (props) => {
  const [name, setName] = useState(null);
  const [addressLine1, setAddressLine1] = useState(null);
  const [addressLine2, setAddressLine2] = useState(null);
  const [addressLine3, setAddressLine3] = useState(null);
  const [city, setCity] = useState(null);
  const [phone, setPhone] = useState(null);
  const [email, setEmail] = useState(null);
  const [gstin, setGstin] = useState(null);

  const history = useHistory();

  const inputElementsCollection = [
    {
      label: 'Name',
      type: 'text',
      description: 'Name of the customer',
      handler: setName,
    },
    {
      label: 'Address Line 1',
      type: 'text',
      description: 'Flat number, Apartment Name, etc',
      handler: setAddressLine1,
    },
    {
      label: 'Address Line 2',
      type: 'text',
      description: 'Locality',
      handler: setAddressLine2,
    },
    {
      label: 'Address Line 3',
      type: 'text',
      description: 'Landmark, etc',
      handler: setAddressLine3,
    },
    {
      label: 'City',
      type: 'text',
      handler: setCity,
    },
    {
      label: 'Phone Number',
      type: 'number',
      description: '10 digits for mobile number',
      handler: setPhone,
    },
    {
      label: 'Email',
      type: 'email',
      description: 'Primary email of the customer',
      handler: setEmail,
    },
    {
      label: 'GSTIN',
      type: 'text',
      description: 'GSTIN of the customer (optional)',
      handler: setGstin,
    },
  ];

  const handleSubmit = () => {
    const formData = {
      name,
      addressLine1,
      addressLine2,
      addressLine3,
      city,
      phone,
      email,
      gstin,
    };

    httpClient.post('customers', formData).then((response) => {
      if (response.status === 201) {
        alert('Successful');
        history.push('/customers');
      } else {
        alert('Failure');
      }
    });
  };

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
              onInput={el.handler}
            />
          );
        })}

        <div className='row'>
          <div className='col'>
            <button className='btn btn-info float-left'>Reset</button>
            <button
              className='btn btn-success float-right'
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CustomerForm;
