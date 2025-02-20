import { useState } from 'react';

function Account() {
  type Settings = {
    phoneNumber: boolean;
    email: boolean;
    lawyerId: boolean;
    location: boolean;
    googleCalendar: boolean;
  };
  const [settings, setSettings] = useState<Settings>({
    phoneNumber: true,
    email: true,
    lawyerId: false,
    location: true,
    googleCalendar: false
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="bg-gray-800 rounded-lg p-8">
        <h2 className="text-xl font-bold text-yellow-500 mb-6">Personal Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-1">Lawyer Name*</label>
              <div className="flex items-center space-x-4">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                  alt="Lawyer"
                  className="w-12 h-12 rounded-full"
                />
                <input
                  type="text"
                  defaultValue="Rohan"
                  className="bg-gray-900 rounded-lg py-2 px-4 text-white w-full"
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Practice as*</label>
              <input
                type="text"
                defaultValue="Individual"
                className="bg-gray-900 rounded-lg py-2 px-4 text-white w-full"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Phone Number</label>
              <input
                type="text"
                defaultValue="+91 - 0123456789"
                className="bg-gray-900 rounded-lg py-2 px-4 text-white w-full"
              />
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-1">Lawyer or Law student*</label>
              <select className="bg-gray-900 rounded-lg py-2 px-4 text-white w-full">
                <option>Lawyer</option>
                <option>Law Student</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Law Degree</label>
              <select className="bg-gray-900 rounded-lg py-2 px-4 text-white w-full">
                <option>B.Sc.LLB</option>
                <option>LLB</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Type</label>
              <select className="bg-gray-900 rounded-lg py-2 px-4 text-white w-full">
                <option>Civil</option>
                <option>Criminal</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-1">Enrollment ID</label>
              <input
                type="text"
                placeholder="Code / ID / Year"
                className="bg-gray-900 rounded-lg py-2 px-4 text-white w-full"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Email</label>
              <input
                type="email"
                defaultValue="example@gmail.com"
                className="bg-gray-900 rounded-lg py-2 px-4 text-white w-full"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Address</label>
              <input
                type="text"
                defaultValue="Hyderabad, Telangana"
                className="bg-gray-900 rounded-lg py-2 px-4 text-white w-full"
              />
            </div>
          </div>
        </div>

        <div className="flex space-x-4 mt-8">
          <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg">
            Save Changes
          </button>
          <button className="bg-gray-700 text-white px-6 py-2 rounded-lg">
            Logout
          </button>
          <button className="bg-red-500 text-white px-6 py-2 rounded-lg">
            Delete Account
          </button>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-8">
        <h2 className="text-xl font-bold mb-4">Settings</h2>
        <p className="text-gray-400 mb-6">Choose what you want to show to other lawyers and users</p>
        
        <div className="space-y-4">
      {Object.entries(settings).map(([key, value]) => (
        <div key={key} className="flex items-center justify-between p-4 bg-gray-900 rounded-lg">
          <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
          <button
            className={`w-12 h-6 rounded-full p-1 transition-colors duration-200 ease-in-out ${
              value ? 'bg-yellow-500' : 'bg-gray-700'
            }`}
            onClick={() => setSettings(prev => ({ ...prev, [key as keyof Settings]: !prev[key as keyof Settings] }))}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full transform transition-transform duration-200 ease-in-out ${
                value ? 'translate-x-6' : 'translate-x-0'
              }`}
            />
          </button>
        </div>
      ))}
    </div>
      </div>
    </div>
  );
}

export default Account;