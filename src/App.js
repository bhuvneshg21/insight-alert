// App.js
import React from 'react';
import Header from './components/Header'; // default export
import Sidebar from './components/Sidebar'; // default export
import TopUpdates from './components/TopUpdates'; // default export
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content-layout">
        <Sidebar />
        <TopUpdates />
        <Sidebar infoOnly />
      </div>
    </div>
  );
}

export default App;
