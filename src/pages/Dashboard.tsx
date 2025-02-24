import { Link } from 'react-router-dom';
import { Files, PlusCircle, Users, FileText, Calendar, HelpCircle, Settings } from 'lucide-react';

function Dashboard() {
  return (
    <div className="space-y-2">
      <div className="flex justify-end items-center mb-5">
        <div className="relative w-64 max-w-md">
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

      <div className="flex justify-center gap-8 items-center mb-6 p-6 md:flex-row" >
        <Link 
          to="/pending-cases" 
          className="bg-white bg-opacity-80 rounded-lg p-6 hover:bg-opacity-60 transition cursor-pointer text-center w-96"
        >
          <h3 className="text-black text-2xl mb-2">Pending Cases</h3>
          <p className="text-black text-3xl font-bold">2</p>
        </Link>
        <Link 
          to="/disclosed-cases" 
          className="bg-white bg-opacity-80 rounded-lg p-6 hover:bg-opacity-60 transition cursor-pointer text-center w-96"
        >
          <h3 className="text-2xl mb-2 text-black">Disclosed Cases</h3>
          <p className="text-3xl font-bold text-black">2</p>
        </Link>
      </div>

      <section>
        <h2 className="text-2xl font-bold mt-4 mb-8 text-center">Quick Access</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center items-center pl-12 pr-12 px-4 mb-6">
          <div className='pl-7 pr-7'>
            <Link to="/all-cases" className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4 hover:bg-gray-700 transition ">
              <Files className="w-8 h-8 text-blue-400" />
              <div className='flex-1 text-center'>
                <span className="">All Cases</span>
              </div>
            </Link>
          </div>
          <div className='pl-7 pr-7'>
          <Link to="/add-case" className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4 hover:bg-gray-700 transition">
            <PlusCircle className="w-8 h-8 text-blue-400" />
            <div className='flex-1 text-center'>
              <span>Add Cases</span>
            </div>
          </Link>
          </div>
          <div className='pl-7 pr-7'>
          <Link to="/teams" className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4 hover:bg-gray-700 transition">
            <Users className="w-8 h-8 text-blue-400" />
            <div className='flex-1 text-center'>
              <span>My Teams</span>
            </div>
          </Link>
          </div>
          <div className='pl-7 pr-7'>
          <Link to="/shared" className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4 hover:bg-gray-700 transition">
            <FileText className="w-8 h-8 text-blue-400" />
            <div className='flex-1 text-center'>
              <span>Shared Cases</span>
            </div>
          </Link>
          </div>
          <div className='pl-7 pr-7'>
          <Link to="/tasks" className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4 hover:bg-gray-700 transition">
            <Calendar className="w-8 h-8 text-blue-400" />
            <div className='flex-1 text-center'>
              <span>Tasks & Events</span>
            </div>
          </Link>
          </div>
          <div className='pl-7 pr-7'>
          <Link to="/tasks" className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4 hover:bg-gray-700 transition">
            <Settings className="w-8 h-8 text-blue-400" />
            <div className='flex-1 text-center'>
              <span>Jurident Assitence </span>
            </div>
          </Link>
          </div>
          <div className='pl-7 pr-7'>
          <Link to="/faq" className="bg-gray-800 rounded-lg p-6 flex items-center space-x-4 hover:bg-gray-700 transition">
            <HelpCircle className="w-8 h-8 text-blue-400" />
            <div className='flex-1 text-center'>
              <span>FAQ ?</span>
            </div>
          </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;