import './App.css';
import React from 'react';
import Axios from 'axios';
import { Excuse } from './Excuse';

function App() {

  const baseURL = `https://excuser-three.vercel.app/v1/excuse/`;

  const [excuse, setExcuse] = React.useState('');

  const generateExcuseFor = name => {
    Axios.get(`${baseURL}${name}/`).then(res => {
      setExcuse(res.data[0].excuse)
    })
  }

  return (
    <div className="App">
      <h1>Generate An Excuse For : </h1>
      <button onClick={() => generateExcuseFor('family') } >Family Excuse</button>
      <button onClick={() => generateExcuseFor('party')} >Party Excuse</button>
      <button onClick={() => generateExcuseFor('office')} >Office Excuse</button>

      { excuse && <Excuse excuse={excuse} /> }
    </div>
  );
}

export default App;
