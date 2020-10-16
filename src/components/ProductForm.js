import React, { useState } from 'react';
import InputField from '../common-components/InputField';
import { httpClient } from '../utils/http-client';
import { useHistory } from 'react-router-dom';

const ProductForm = (props) => {
  const [name, setName] = useState(null);
  const [category, setCategory] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [taxRate, setTaxRate] = useState(null);

  const history = useHistory();

  const inputElementsCollection = [
    {
      label: 'Name',
      type: 'text',
      description: 'Name of the product',
      handler: setName,
    },
    {
      label: 'Category',
      type: 'text',
      description: 'Product category',
      handler: setCategory,
    },
    {
      label: 'Description',
      type: 'text',
      description: 'Description of the product',
      handler: setDescription,
    },
    {
      label: 'Price',
      type: 'number',
      description: 'Standard price of the product',
      handler: setPrice,
    },
    {
      label: 'Tax Rate',
      type: 'number',
      description: 'Tax rate (%)',
      handler: setTaxRate,
    },
  ];

  const handleSubmit = () => {
    const formData = {
      name,
      category,
      description,
      price,
      taxRate,
    };

    httpClient.post('products', formData).then((response) => {
      if (response.status === 201) {
        alert('Successful');
        history.push('/products');
      } else {
        alert('Failure');
      }
    });
  };

  return (
    <React.Fragment>
      <div>
        <h2>Create Product</h2>
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

export default ProductForm;
