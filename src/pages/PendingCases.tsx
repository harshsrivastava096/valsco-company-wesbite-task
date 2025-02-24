import { ArrowLeft} from "lucide-react";
import { Link } from "react-router-dom";

const pendingCases = [
  {
    id: "23-FA-234598",
    name: "Criminal Case",
    partyName: "Sambashiva Rao",
    status: "Pending",
    nextHearing: "2024-04-15",
    image:
      "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "23-FA-234598",
    name: "Criminal Case",
    partyName: "Sambashiva Rao",
    status: "Pending",
    nextHearing: "2024-04-15",
    image:
      "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "23-FA-234598",
    name: "Criminal Case",
    partyName: "Sambashiva Rao",
    status: "Pending",
    nextHearing: "2024-04-15",
    image:
      "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "23-FA-234599",
    name: "Civil Case",
    partyName: "John Doe",
    status: "Pending",
    nextHearing: "2024-04-20",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "23-FA-234599",
    name: "Civil Case",
    partyName: "John Doe",
    status: "Pending",
    nextHearing: "2024-04-20",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "23-FA-234599",
    name: "Civil Case",
    partyName: "John Doe",
    status: "Pending",
    nextHearing: "2024-04-20",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "23-FA-234599",
    name: "Civil Case",
    partyName: "John Doe",
    status: "Pending",
    nextHearing: "2024-04-20",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "23-FA-234599",
    name: "Civil Case",
    partyName: "John Doe",
    status: "Pending",
    nextHearing: "2024-04-20",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "23-FA-234599",
    name: "Civil Case",
    partyName: "John Doe",
    status: "Pending",
    nextHearing: "2024-04-20",
    image:
      "https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

function PendingCases() {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex justify-start w-full mb-8">
          <Link to="/" className="text-gray-400 hover:text-white">
            <ArrowLeft className="w-6 h-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center gap-6 mb-10 mt-1" >
          <Link
            to="/pending-cases"
            className="bg-yellow-300 bg-opacity-60 rounded-lg p-6 hover:bg-opacity-80 transition cursor-pointer text-center w-96"
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pendingCases.map((caseItem) => (
          <Link
            key={caseItem.id}
            to={`/case/${caseItem.id}`}
            className="bg-gray-800 rounded-lg p-3 hover:bg-gray-700 transition w-26"
          >
            <div className="flex items-center space-x-4">
              <img
                src={caseItem.image}
                alt={caseItem.name}
                className="w-16 h-16 rounded-lg object-cover"
              />
              <div>
                <p className="text-sm text-gray-400">
                  Case Number: {caseItem.id}
                </p>
                <p className="font-medium">{caseItem.name}</p>
                <p className="text-sm text-gray-400">
                  Party Name: {caseItem.partyName}
                </p>
                <p className="text-sm text-yellow-500">
                  Next Hearing: {caseItem.nextHearing}
                </p>
              </div>
              
            </div>
          </Link>
        ))}
      </div>

      
    </div>
  );
}

export default PendingCases;
