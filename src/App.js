import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CounterPage from './CounterPage';
import NotFound from './Notfound';
import ErrorBoundary from './ErrorBoundary';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CounterPage />} /> 
        <Route path="/error-boundary" element={<ErrorBoundary />} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
