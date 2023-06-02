import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Hello from './components/Hello';
import reportWebVitals from './reportWebVitals';
import Name from './components/Name';
import Message from './components/Message';
import Parent from './components/ContainerSample';
import Page from './components/ContextSample';
import Counter from './components/CounterSample';
import Counter02 from './components/CounterSample02';
import { FizzBuzz } from './components/FizzBuzz';
import { FizzBuzz02 } from './components/FizzBuzz02';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
//  <React.StrictMode>
  <div>
    <Hello />
    <Name />
    <Message />
    <Parent />
    <Page />
    <Counter initialValue={1} />
    <Counter02 initialValue={1} />
    <FizzBuzz02 />
  </div>
//  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
