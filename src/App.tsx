import React from 'react';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

// Pages
import Login from './pages/Login';
import Diary from './pages/report/diary';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/report/diary' element={<Diary />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
