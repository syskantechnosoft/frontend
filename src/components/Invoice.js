import React from 'react';

const Invoice = (props) => {
  return (
    <React.Fragment>
      <h3>New Invoice</h3>
      <hr />
      <div className='row mb-4'>
        <div className='col-md-6'>
          <div class='card'>
            <div class='card-header h4'>Invoice To:</div>
            <div class='card-body'>
              <h6 class='card-title'>Customer</h6>
              <h6 class='card-title'>Address 1</h6>
              <h6 class='card-title'>Address 1</h6>
              <h6 class='card-title'>City</h6>
            </div>
          </div>
        </div>
        <div className='col-md-6'>
          <div class='card'>
            <div class='card-header h4'>Invoice Metadata:</div>
            <div class='card-body'>
              <h6 class='card-title'>Invoice Number</h6>
              <h6 class='card-title'>Invoice Date</h6>
              <h6 class='card-title'>Narrations</h6>
              <h6 class='card-title'>Shipping Information</h6>
            </div>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <table class='table table-striped'>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>First</th>
                <th scope='col'>Last</th>
                <th scope='col'>Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope='row'>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope='row'>2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope='row'>3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <button className='btn btn-info float-left'>Reset</button>
          <button className='btn btn-success float-right'>Submit</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Invoice;
