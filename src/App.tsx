import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LogIn from './components/LogIn';
import Dashboard from './components/Dashboard';
import CodeEntry from './components/CodeEntry';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/code-entry" element={<CodeEntry />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
