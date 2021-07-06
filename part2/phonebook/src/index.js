import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import axios from 'axios';

const notes = [
  {
    id: 1,
    content: "HTML is easy",
    date: "2019-05-30T17:30:31.098z",
    important: true
  },
  {
    id: 2,
    content: "Browser can execute only JavaScript",
    date: "2019-05-30T18:39:31.091z",
    important: false
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocol",
    date: "2019-05-30T19:20:31.298z",
    important: true
  },
]

const promise = axios.get("http://localhost:3001/notes").then(response => {
  const notes = response.data
  console.log(notes)
  ReactDOM.render(
    <App notes={notes} />,
    document.getElementById('root')
  );
})





