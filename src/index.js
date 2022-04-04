import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Aboutme from './Components/Aboutme'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UseState from './Components/UseState';
import Counter from './Components/Counter';
import Hobbies from './Components/Hobbies';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
          <Route path='/Aboutme' element={<Aboutme/>} />
          <Route path='/UseState' element={<UseState/>} />
          <Route path='/Counter' element={<Counter />} />
          <Route path='/Hobbies' element={<Hobbies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);