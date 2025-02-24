import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import AllCases from './pages/AllCases';
import PendingCases from './pages/PendingCases';
import DisclosedCases from './pages/DisclosedCases';
import CaseDetails from './pages/CaseDetails';
import EditCaseDetails from './pages/EditCaseDetails';
import CaseNotes from './pages/CaseNotes';
import ContactUs from './pages/ContactUs';
import Account from './pages/Account';
import Feedback from './pages/Feedback';

import './App.css'
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-none text-white">
        <Navbar />
        <main className="container mx-auto p-12">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/all-cases" element={<AllCases />} />
            <Route path="/pending-cases" element={<PendingCases />} />
            <Route path="/disclosed-cases" element={<DisclosedCases />} />
            <Route path="/case/:id" element={<CaseDetails />} />
            <Route path="/case/:id/edit" element={<EditCaseDetails />} />
            <Route path="/case/:id/notes" element={<CaseNotes />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/account" element={<Account />} />
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

