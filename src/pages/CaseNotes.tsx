import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function CaseNotes() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Link to="/case/123" className="text-gray-400 hover:text-white">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold">Case Notes</h1>
        </div>
        <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg">
          Save
        </button>
      </div>

      <div className="bg-white rounded-lg p-6">
        <textarea
          placeholder="add your case notes"
          className="w-full h-64 bg-transparent text-gray-800 placeholder-gray-500 resize-none focus:outline-none"
        ></textarea>
      </div>
    </div>
  );
}

export default CaseNotes;