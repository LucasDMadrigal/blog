import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.css';
import Layout from './Layout';
import Home from '../pages/Home';
import Portfolio from '../pages/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
