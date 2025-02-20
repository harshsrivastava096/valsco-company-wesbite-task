import { ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const cases = [
  {
    id: '23-FA-234598',
    name: 'Criminal Case',
    partyName: 'Sambashiva Rao',
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '23-FA-234598',
    name: 'Criminal Case',
    partyName: 'Sambashiva Rao',
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '23-FA-234598',
    name: 'Criminal Case',
    partyName: 'Sambashiva Rao',
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '23-FA-234598',
    name: 'Criminal Case',
    partyName: 'Sambashiva Rao',
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '23-FA-234598',
    name: 'Criminal Case',
    partyName: 'Sambashiva Rao',
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '23-FA-234598',
    name: 'Criminal Case',
    partyName: 'Sambashiva Rao',
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '23-FA-234598',
    name: 'Criminal Case',
    partyName: 'Sambashiva Rao',
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '23-FA-234598',
    name: 'Criminal Case',
    partyName: 'Sambashiva Rao',
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '23-FA-234598',
    name: 'Criminal Case',
    partyName: 'Sambashiva Rao',
    image: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  // Repeat for other cases...
];

function AllCases() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-gray-400 hover:text-white">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <h1 className="text-2xl font-bold text-yellow-500">All Cases</h1>
        </div>
        <div className="relative w-64">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-gray-800 rounded-lg py-2 px-4 text-white pr-10"
          />
          <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((caseItem, index) => (
          <Link
            key={index}
            to={`/case/${caseItem.id}`}
            className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition"
          >
            <div className="flex items-center space-x-4">
              <img
                src={caseItem.image}
                alt={caseItem.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <p className="text-sm text-gray-400">Case Number: {caseItem.id}</p>
                <p className="font-medium">{caseItem.name}</p>
                <p className="text-sm text-gray-400">Party Name: {caseItem.partyName}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default AllCases;