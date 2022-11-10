
import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
   
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