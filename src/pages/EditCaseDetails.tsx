import { ArrowLeft, Pencil } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SavePopup from './SavePopup';

function EditCaseDetails() {
  const [formData, setFormData] = useState({
    caseNumber: '',
    caseName: '',
    hearingDate: '',
    courtName: '',
    partyContactNumber: '',
    respondentName: '',
    petitionerName: ''
  });

  const [showPopup, setShowPopup] = useState(false);
  
  useEffect(() => {
    const savedData = localStorage.getItem('caseDetails');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    setShowPopup(true);
  };

  const confirmSave = () => {
    localStorage.setItem('caseDetails', JSON.stringify(formData));
    setShowPopup(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Link to="/case/123" className="text-gray-400 hover:text-white">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold text-yellow-500">Edit Case Details</h1>
        </div>
        <div className="space-x-4">
        <button className="bg-transparent text-white border-x-2 border-y-2  px-4 py-2 rounded-lg">
            Edit Notes
          </button>
          <button className="bg-yellow-500 text-black px-4 py-2 rounded-lg" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>

      <div className="bg-gray-800 rounded-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-1">Case Number</label>
              <div className="relative">
                <input
                  type="text"
                  name="caseNumber"
                  value='123456789'
                  onChange={handleInputChange}
                  className="w-full bg-gray-900 rounded-lg py-2 px-4 text-white pr-10"
                />
                <Pencil className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Case Name</label>
              <div className="relative">
                <input
                  type="text"
                  name="caseName"
                  value='123456789'
                  onChange={handleInputChange}
                  className="w-full bg-gray-900 rounded-lg py-2 px-4 text-white pr-10"
                />
                <Pencil className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Hearing Date</label>
              <div className="relative">
                <input
                  type="text"
                  name="hearingDate"
                  value='123456789'
                  onChange={handleInputChange}
                  className="w-full bg-gray-900 rounded-lg py-2 px-4 text-white pr-10"
                />
                <Pencil className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Court Name</label>
              <div className="relative">
                <input
                  type="text"
                  name="courtName"
                  value='123456789'
                  onChange={handleInputChange}
                  className="w-full bg-gray-900 rounded-lg py-2 px-4 text-white pr-10"
                />
                <Pencil className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-gray-400 mb-1">Party Contact Number</label>
              <div className="relative">
                <input
                  type="text"
                  name="partyContactNumber"
                  value='123456789'
                  onChange={handleInputChange}
                  className="w-full bg-gray-900 rounded-lg py-2 px-4 text-white pr-10"
                />
                <Pencil className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Respondent Name</label>
              <div className="relative">
                <input
                  type="text"
                  name="respondentName"
                  value='123456789'
                  onChange={handleInputChange}
                  className="w-full bg-gray-900 rounded-lg py-2 px-4 text-white pr-10"
                />
                <Pencil className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
            <div>
              <label className="block text-gray-400 mb-1">Petitioner Name</label>
              <div className="relative">
                <input
                  type="text"
                  name="petitionerName"
                  value='123456789'
                  onChange={handleInputChange}
                  className="w-full bg-gray-900 rounded-lg py-2 px-4 text-white pr-10"
                />
                <Pencil className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPopup && (
        <SavePopup 
          onConfirm={confirmSave}
          onCancel={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

export default EditCaseDetails;