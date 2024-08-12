import React, { useEffect } from 'react';
import './App.css';
import QuoteFetcher from './quoteFetcher';

let name = 'Sonal Jain';

function App() {
  useEffect(() => {
    alert("Hello!" + '\n' + " Welcome to " + name + " " + "website");
  })
  return (
    <div className="App">
      <QuoteFetcher />
    </div>
  );
}

export default App;
