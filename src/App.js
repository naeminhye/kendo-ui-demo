﻿import React from 'react';
import './App.scss';
import { Header } from './pages/Header'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import Footer from './pages/Footer';

import Products from "./pages/Products";
import Grid from "./pages/Products";
import Form from "./pages/Form";
import Others from "./pages/Others";
import GridDemo from './pages/Grid';

function App() {
  return (
    <Router>
      <div className="content">
        <Header projectName={'Demo Kendo UI with Redux'} />
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/Grid" component={Grid} />
        <Route path = "/grid-demo" component={GridDemo} />
        <Route path="/Form" component={Form} />
        <Route path="/Others" component={Others} />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </Router>
  );
}

export default App;
