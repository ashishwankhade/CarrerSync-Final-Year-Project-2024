import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import LoginForm from './pages/LoginForm/LoginForm';
import HomePage from '../src/pages/HomePage/HomePage';
import JobPost from '../src/pages/JobPost/JobPost'
import JobGrid from './pages/JobGrid/JobGrid';


function App() {

  const location = useLocation();

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePage/>}  />
        <Route exact path="/LoginPage" element={<LoginForm/>} />
        <Route exact path="/Dashboard" element={<Dashboard/>}/>
        <Route exact path="/job/job-post" element={<JobPost/>}/>
        <Route exact path="/JobGrid" element={<JobGrid/>}/>

        {/* <Route path="/app" component={Layout} /> */}


        
      </Routes>
    </>
  );
}

export default App;
