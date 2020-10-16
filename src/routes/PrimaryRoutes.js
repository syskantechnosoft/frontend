import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CustomerForm from '../components/CustomerForm';
import NotFound from '../components/NotFound';
import Home from '../components/Home';
import ProductForm from '../components/ProductForm';
import Invoice from '../components/Invoice';
import Dashboard from '../components/Dashboard';
import Report from '../components/Report';

const PrimaryRoutes = (props) => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/customers/new' component={CustomerForm} />
        <Route exact path='/products/new' component={ProductForm} />
        <Route exact path='/invoices/new' component={Invoice} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/report' component={Report} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
};

export default PrimaryRoutes;
