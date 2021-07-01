import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const notes = [
  {id:1, text: "hello, hello"},
  {id:2, text: "I dont know why you say goodbye"},
  {id:3, text: "And I say hello"}
]

ReactDOM.render(
  <React.StrictMode>
    <App notes={notes}/>
  </React.StrictMode>,
  document.getElementById('root')
);


