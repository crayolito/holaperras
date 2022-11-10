
import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import "./App.css";
import axios from 'axios';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    const pruebas = async() =>{
      const res = await axios.get('https://frothend-crayolito.herokuapp.com/api')
      setData(res.data.message)
    }
    pruebas()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      <img src={reactLogo} className="logo react" alt="React logo" />
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;