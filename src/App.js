import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link} from "react-router-dom";
import './App.css';
import Form from './components/Navbar';
import Pokelist from './components/PokeList';

function App() {
  return (
    <div className="App">
      <Form />
      <Pokelist />
    </div>
  );
}

export default App;
