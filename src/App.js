import React, { Fragment } from 'react';
import './App.css';
import ToDo from "./containers/todo/todo";


const App = () => (
  <Fragment>
    <div className="header">
      <h1>Reminder</h1>
    </div>
    <ToDo />
  </Fragment>
)

export default App;
