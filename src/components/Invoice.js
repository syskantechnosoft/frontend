import React, { useState, useEffect } from 'react';
import CustomerSelection from './CustomerSelection';
import { httpClient } from '../utils/http-client';
import { useHistory } from 'react-router-dom';

const Invoice = (props) => {
  const history = useHistory();

  const [timestamp, setTimestamp] = useState(null);
  const [shippingInformation, setShippingInformation] = useState(null);
  const [customerId, setCustomerId] = useState(null);
  const [paymentTerms, setPaymentTerms] = useState(null);
  const [lineItems, setLineItems] = useState([]);

  const [productId, setProductId] = useState(null);
  const [productName, setProductName] = useState(null);
  const [quantity, setQuantity] = useState(null);
  const [price, setPrice] = useState(null);
  const [taxRate, setTaxRate] = useState(null);
  const [taxAmount, setTaxAmount] = useState(null);
  const [lineAmount, setLineAmount] = useState(null);

  const [products, setProducts] = useState([]);

  const handleLineInsertion = (value) => {
    const line = {
      productId,
      productName,
      quantity,
      basePrice: price,
      taxRate,
      taxAmount,
      lineAmount,
    };

    const lines = [...lineItems];
    lines.push(line);
    setLineItems(lines);
  };

  useEffect(() => {
    httpClient
      .get('products/lookup')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        alert('Error getting products lookup');
        console.log('Error', error);
      });
  }, []);

  const handleProductSelection = (id, value) => {
    setProductId(id);
    setProductName(value);
  };

  const handleSubmit = () => {
    const formData = {
      customerId,
      timestamp,
      shippingInformation,
      paymentTerms,
      lineItems,
    };

    httpClient
      .post('invoices', formData)
      .then((response) => {
        history.push('/');
      })
      .catch((error) => {
        alert('Error sumbitting invoice');
      });
  };

  return (
    <React.Fragment>
      <h3>New Invoice</h3>
      <hr />
      <div className='row mb-4'>
        <div className='col-md-6'>
          <CustomerSelection onInput={setCustomerId} />
        </div>
        <div className='col-md-6'>
          <table className='table table-bordered'>
            <tbody>
              <tr>
                <th scope='row' colSpan='2'>
                  Sales Invoice
                </th>
              </tr>
              <tr>
                <th scope='row' style={{ width: '25%' }}>
                  Date
                </th>
                <th scope='row'>
                  <input
                    type='datetime-local'
                    class='form-control'
                    onInput={(e) => setTimestamp(e.target.value)}
                  />
                </th>
              </tr>
              <tr>
                <th scope='row'>Shipping Information</th>
                <td>
                  <input
                    type='text'
                    class='form-control'
                    onInput={(e) => setShippingInformation(e.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <th scope='row'>Payment Terms</th>
                <td>
                  <input
                    type='text'
                    class='form-control'
                    onInput={(e) => setPaymentTerms(e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <table class='table table-striped'>
            <thead>
              <tr>
                <th scope='col'>Product</th>
                <th scope='col'>Quantity</th>
                <th scope='col'>Price</th>
                <th scope='col'>Tax Rate</th>
                <th scope='col'>Tax Amount</th>
                <th scope='col'>Line Amount</th>
                <th scope='col'></th>
              </tr>
              <tr>
                <th scope='col'>
                  <select
                    className='form-control'
                    onChange={(e) =>
                      handleProductSelection(
                        e.target.value,
                        e.target.selectedOptions[0].text
                      )
                    }
                  >
                    <option>--- Please Select ---</option>
                    {products.map((c) => {
                      return <option value={c.id}>{c.name}</option>;
                    })}
                  </select>
                </th>
                <th scope='col'>
                  <input
                    type='number'
                    class='form-control'
                    onInput={(e) => setQuantity(e.target.value)}
                  />
                </th>
                <th scope='col'>
                  <input
                    type='number'
                    class='form-control'
                    onInput={(e) => setPrice(e.target.value)}
                  />
                </th>
                <th scope='col'>
                  <input
                    type='number'
                    class='form-control'
                    onInput={(e) => setTaxRate(e.target.value)}
                  />
                </th>
                <th scope='col'>
                  <input
                    type='number'
                    class='form-control'
                    onInput={(e) => setTaxAmount(e.target.value)}
                  />
                </th>
                <th scope='col'>
                  <input
                    type='number'
                    class='form-control'
                    onInput={(e) => setLineAmount(e.target.value)}
                  />
                </th>
                <th scope='col'>
                  <button
                    className='btn btn-primary'
                    onClick={handleLineInsertion}
                  >
                    Add
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {lineItems.map((l, i) => {
                return (
                  <tr key={i}>
                    <td>{l.productName}</td>
                    <td>{l.quantity}</td>
                    <td>{l.price}</td>
                    <td>{l.taxRate}</td>
                    <td>{l.taxAmount}</td>
                    <td>{l.lineAmount}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
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
    </React.Fragment>
  );
};

export default Invoice;
