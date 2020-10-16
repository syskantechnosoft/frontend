import React, { useState, useEffect } from 'react';
import { httpClient } from '../utils/http-client';

const ProductReport = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    httpClient
      .get('products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error', error);
      });
  }, []);

  return (
    <React.Fragment>
      <h3>Products</h3>
      <table className='table table-hover'>
        <thead>
          <tr>
            <th scope='col'>Id</th>
            <th scope='col'>Name</th>
            <th scope='col'>Category</th>
            <th scope='col'>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((c) => {
            return (
              <tr key={c.id}>
                <th scope='row'>{c.id}</th>
                <td>{c.name}</td>
                <td>{c.category}</td>
                <td>{c.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default ProductReport;
