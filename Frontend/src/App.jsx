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
import {DashboardHomePage} from "../src/pages/HomePage/DashboardHomePage";
import CompanyDesc from './pages/CompanyDesc/CompanyDesc';
import TableData from './pages/TableData/TableData';
import Studentinfo from './pages/StudentDashboard/Studentinfo'
import Studentdashboard from './pages/StudentDashboard/Studentdashboard';
import WelcomeBanner from './partials/dashboard/WelcomeBanner';


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
        <Route exact path="/login" element={<LoginForm/>} />
        
        <Route exact path="/dashboard" element={<Dashboard/>}> 
          <Route exact path='/dashboard/visionvoult' element={<DashboardHomePage/>}/>
          <Route exact path="/dashboard/job-post" element={<JobPost/>}/>
          <Route exact path="/dashboard/activejobs" element={<JobGrid/>}/>
          <Route exact path="/dashboard/companydesc" element={<CompanyDesc/>}/>
          <Route exact path="/dashboard/studentdata" element={<TableData/>}/>
        </Route>

        {/* <Route path="/app" component={Layout} /> */}


        <Route exact path="/studentdashboard" element={<Studentdashboard />}>
          <Route
            exact
            path="/studentdashboard/Studentinfo"
            element={<Studentinfo />}
          />
          <Route
            exact
            path="/studentdashboard/activejobs"
            element={<JobGrid />}
          />
          <Route
            exact
            path="/studentdashboard/home"
            element={<WelcomeBanner />}
          />

          {/* <Route exact path="/dashboard/job-post" element={<JobPost />} /> */}
          {/* <Route exact path="/dashboard/activejobs" element={<JobGrid />} /> */}
          {/* <Route exact path="/dashboard/companydesc" element={<CompanyDesc/>}/> */}
        </Route>
        {/* <Route exact path="/tpodashboard" element={< Tpodashboard/>}>
          <Route
            exact
            path="/tpodashboard/TeacherR"
            element={<TeacherR />}
          />
          <Route
            exact
            path="/tpodashboard/activejobs"
            element={<JobGrid />}
          />
          

          {/* <Route exact path="/dashboard/job-post" element={<JobPost />} /> */}
          {/* <Route exact path="/dashboard/activejobs" element={<JobGrid />} /> */}
          {/* <Route exact path="/dashboard/companydesc" element={<CompanyDesc/>}/> */}
        {/* </Route> */} 





        
      </Routes>
    </>
  );
}

export default App;
