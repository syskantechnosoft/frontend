import React from 'react';
import CustomerForm from './components/CustomerForm';
import ProductForm from './components/ProductForm';
import AppLayout from './layout/AppLayout';
import PrimaryRoutes from './routes/PrimaryRoutes';

function App() {
  return (
    <React.Fragment>
      <AppLayout>
        <PrimaryRoutes />
      </AppLayout>
    </React.Fragment>
  );
}

export default App;
