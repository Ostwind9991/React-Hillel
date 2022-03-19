import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../src/scss/common/fonts.scss'
import Footer from './components/Footer';
import HeaderLight from './components/HeaderLight';
import About_us from './pages/about_us';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <HeaderLight/>
    <About_us/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
