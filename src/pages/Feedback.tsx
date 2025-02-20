import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function Feedback() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center space-x-4 mb-8">
        <Link to="/" className="text-gray-400 hover:text-white">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold text-yellow-500">Feedback Form</h1>
      </div>

      <div className="bg-gray-800 rounded-lg p-8">
        <form className="space-y-6">
          <div>
            <label className="block text-gray-400 mb-1">First Name</label>
            <input
              type="text"
              className="w-full bg-gray-900 rounded-lg py-2 px-4 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Last Name</label>
            <input
              type="text"
              className="w-full bg-gray-900 rounded-lg py-2 px-4 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Email</label>
            <input
              type="email"
              className="w-full bg-gray-900 rounded-lg py-2 px-4 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Phone number</label>
            <input
              type="tel"
              className="w-full bg-gray-900 rounded-lg py-2 px-4 text-white"
            />
          </div>

          <div>
            <label className="block text-gray-400 mb-1">Feedback</label>
            <textarea
              rows={4}
              className="w-full bg-gray-900 rounded-lg py-2 px-4 text-white resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-black py-2 rounded-lg hover:bg-yellow-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Feedback;