import React from 'react';
import InputField from '../common-components/InputField';

const ProductForm = (props) => {
  const inputElementsCollection = [
    {
      label: 'Name',
      type: 'text',
      description: 'Name of the product',
    },
    {
      label: 'Category',
      type: 'text',
      description: 'Product category',
    },
    {
      label: 'Description',
      type: 'text',
      description: 'Description of the product',
    },
    {
      label: 'Price',
      type: 'number',
      description: 'Standard price of the product',
    },
    {
      label: 'Tax Rate',
      type: 'number',
      description: 'Tax rate (%)',
    },
  ];
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

export default ProductForm;
