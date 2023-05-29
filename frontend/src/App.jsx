import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

import { Dashboard, Footer, Getstarted, Home, Navbar } from "./components";

  
function App() {
  
  return (
    <div class="app-container">
      <Router>
        <Navbar />
        <div className="content">

          <Routes>
              <Route exact path='/' element={<Home />} />
              <Route className="getStartedbg" path='/get-started' element={<Getstarted />} />
              <Route path='/dashboard/:condition1/:confidence1/:condition2/:confidence2/:condition3/:confidence3/:state/:city' element={<Dashboard />} />
          </Routes>
        </div>

        <Footer className="footer"/>

      </Router>
    </div>
  );
};
  
export default App;
