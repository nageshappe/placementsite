import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import Navbar
import Home from './pages/Home';
import "./App.css"
import MissionVision from './pages/MissionVision';
import OurRecruiters from './pages/OurRecruiters';
import GovtAccreditations from './pages/GovtAccreditations';
import ProfessionalMemberships from './pages/ProfessionalMemberships';
import IndustryMoUs from './pages/IndustryMoUs';
import CenterOfExcellence from './pages/CenterOfExcellence';
import Bosch from './pages/Bosch';
import Mitsubishi from './pages/Mitsubishi';
import Virtusa from './pages/Virtusa';
import GlobalLogic from './pages/GlobalLogic';
import InternshipCalendar from './pages/InternshipCalendar';
import InternshipStatistics from './pages/InternshipStatistics';
import InternshipCoordinator from './pages/InternshipCoordinator';
import WorkshopCalendar from './pages/WorkshopCalendar';
import PlacementCalendar from './pages/PlacementCalendar';
import PlacementStatistics from './pages/PlacementStatistics';
import CDCTeam from './pages/CDCTeam';
import CDCCoordinators from './pages/CDCCoordinators';
import SkillingInitiatives from './pages/SkillingInitiatives';
import PlacementGoals from './pages/PlacementGoals';

function App() {
  return (
    <Router>
      <h1 className="heading text-center fs-2"><img src="/images/cvr_logo1.webp" width="60px" height="60px"/>CVR College of Engineering</h1>
      <div className="text-center fs-4">Career Development Center </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mission-vision" element={<MissionVision />} />
        <Route path="/goals" element={<PlacementGoals />} />
        <Route path="/skilling" element={<SkillingInitiatives />} />

        <Route path="/recruiters" element={<OurRecruiters />} />
        <Route path="/govt-accreditations" element={<GovtAccreditations />} />
        <Route path="/professional-memberships" element={<ProfessionalMemberships />} />
        <Route path="/industry-mous" element={<IndustryMoUs />} />
        <Route path="/coe" element={<CenterOfExcellence/>}/>
        {/* <Route path="/bosch" element={<Bosch />} />
        <Route path="/mitsubishi" element={<Mitsubishi />} />
        <Route path="/virtusa" element={<Virtusa />} />
        <Route path="/global-logic" element={<GlobalLogic />} /> */}
        <Route path="/internship-calendar" element={<InternshipCalendar />} />
        <Route path="/internship-statistics" element={<InternshipStatistics />} />
        <Route path="/internship-coordinator" element={<InternshipCoordinator />} />
        <Route path="/workshop-calendar" element={<WorkshopCalendar />} />
        <Route path="/placement-calendar" element={<PlacementCalendar />} />
        <Route path="/placement-statistics" element={<PlacementStatistics />} />
        <Route path="/cdc-team" element={<CDCTeam />} />

        <Route path="/cdc-coordinators" element={<CDCCoordinators />} />
      </Routes>
    </Router>
  );
}

export default App;
