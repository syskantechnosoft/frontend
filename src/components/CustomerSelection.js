import React, { useState, useEffect } from 'react';
import { httpClient } from '../utils/http-client';

const CustomerSelection = (props) => {
  const [customers, setCustomers] = useState([]);
  const [currentCustomer, setCurrentCustomer] = useState({});

  useEffect(() => {
    httpClient
      .get('customers/lookup')
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        alert('Error getting customer lookup');
        console.log('Error', error);
      });
  }, []);

  const handleSelection = (value) => {
    httpClient
      .get(`customers/${value}`)
      .then((response) => {
        setCurrentCustomer(response.data);
      })
      .catch((error) => {
        alert('Error getting customer information');
      });

    props.onInput(+value);
  };

  return (
    <React.Fragment>
      <table className='table table-bordered'>
        <tbody>
          <tr>
            <th scope='row' style={{ width: '25%' }}>
              Select:
            </th>
            <th scope='row'>
              <select
                className='form-control'
                onChange={(e) => handleSelection(e.target.value)}
              >
                <option>--- Please Select ---</option>
                {customers.map((c) => {
                  return <option value={c.id}>{c.name}</option>;
                })}
              </select>
            </th>
          </tr>
          <tr>
            <th scope='row'>Name</th>
            <td>{currentCustomer.name}</td>
          </tr>
          <tr>
            <th scope='row'>Address</th>
            <td>
              {currentCustomer.addressLine1} {currentCustomer.addressLine2}{' '}
              {currentCustomer.addressLine3}
            </td>
          </tr>
          <tr>
            <th scope='row'>City</th>
            <td>{currentCustomer.city}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default CustomerSelection;
