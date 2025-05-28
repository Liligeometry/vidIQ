import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage, Dashboard } from './components';
import KeywordResearch from './KeywordResearch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/keyword-research" element={<KeywordResearch />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;