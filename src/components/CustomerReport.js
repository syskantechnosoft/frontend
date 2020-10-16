import React, { useState, useEffect } from 'react';
import { httpClient } from '../utils/http-client';

const CustomerReport = (props) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    httpClient
      .get('customers')
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.error('Error', error);
      });
  }, []);

  return (
    <React.Fragment>
      <h3>Customers</h3>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>Id</th>
            <th scope='col'>Name</th>
            <th scope='col'>City</th>
            <th scope='col'>Phone</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c) => {
            return (
              <tr key={c.id}>
                <th scope='row'>{c.id}</th>
                <td>{c.name}</td>
                <td>{c.city}</td>
                <td>{c.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default CustomerReport;
