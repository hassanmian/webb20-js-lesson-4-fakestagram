import React from 'react'
import { Switch, Route, Link } from "react-router-dom";
import NavLinkItem from './components/NavLinkItem';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ImageListPage from './pages/ImageListPage';

function App() {
  return (
    <div className="container">
      
      <div className="row">
        <div className="col-md-12">
          <h1>Fakestagram</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <ul className="nav">
            <NavLinkItem to="/" text="Home" />
            <NavLinkItem to="/about" text="About" />
            <NavLinkItem to="/contact" text="Contact" />
            <NavLinkItem to="/instagram" text="Instagram" />
          </ul>
        </div>
      </div>
      
      <Switch>

        <Route path="/instagram">
          <ImageListPage />
        </Route>

        <Route path="/contact">
          <ContactPage />
        </Route>

        <Route path="/about">
          <AboutPage />
        </Route>
        
        <Route path="/">
          <HomePage />
        </Route>

      </Switch>

    </div>
  );
}

export default App;
