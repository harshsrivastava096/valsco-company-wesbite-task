import { Link } from 'react-router-dom';
import { Files, PlusCircle, Users, FileText, Calendar, HelpCircle } from 'lucide-react';

function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="flex justify-end items-center mb-8">
        <div className="relative w-64 ">
          <input
            type="text"
            placeholder="Search a Lawyer"
            className="w-full bg-gray-800 rounded-lg py-2 px-4 text-white"
          />
          <button className="absolute right-3 top-2.5">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-12">
        <Link 
          to="/pending-cases" 
          className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition cursor-pointer"
        >
          <h3 className="text-xl mb-2">Pending Cases</h3>
          <p className="text-3xl font-bold">4</p>
        </Link>
        <Link 
          to="/disclosed-cases" 
          className="bg-white bg-opacity-10 rounded-lg p-6 hover:bg-opacity-20 transition cursor-pointer"
        >
          <h3 className="text-xl mb-2">Disclosed Cases</h3>
          <p className="text-3xl font-bold">2</p>
        </Link>
      </div>

      <section>
        <h2 className="text-2xl font-bold mb-6">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/all-cases" className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4 hover:bg-gray-700 transition">
            <Files className="w-8 h-8 text-blue-400" />
            <span>All Cases</span>
          </Link>
          <Link to="/add-case" className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4 hover:bg-gray-700 transition">
            <PlusCircle className="w-8 h-8 text-blue-400" />
            <span>Add Cases</span>
          </Link>
          <Link to="/teams" className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4 hover:bg-gray-700 transition">
            <Users className="w-8 h-8 text-blue-400" />
            <span>My Teams</span>
          </Link>
          <Link to="/shared" className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4 hover:bg-gray-700 transition">
            <FileText className="w-8 h-8 text-blue-400" />
            <span>Shared Cases</span>
          </Link>
          <Link to="/tasks" className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4 hover:bg-gray-700 transition">
            <Calendar className="w-8 h-8 text-blue-400" />
            <span>Tasks & Events</span>
          </Link>
          <Link to="/faq" className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4 hover:bg-gray-700 transition">
            <HelpCircle className="w-8 h-8 text-blue-400" />
            <span>FAQ ?</span>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;