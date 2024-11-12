import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TopUpdates from './components/TopUpdates';
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
