import { ArrowLeft, MessageSquare, Phone, Mail, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

function ContactUs() {
  return (
    <div className="min-h-screen bg-transparent] relative overflow-hidden">
      <div className="flex justify-start w-full mb-8">
        <Link to="/" className="text-gray-400 hover:text-white">
          <ArrowLeft className="w-6 h-6" />
        </Link>
      </div>

      <div className="relative max-w-3xl mx-auto p-14 bg-[#1A1535] rounded-2xl">
        <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-[#C4A962] text-center mb-4">Contact Us</h2>
           <p className="text-center text-gray-300 mb-12">
             Please choose what types of support do you need and let us know.
           </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gray-600 rounded-lg p-6 text-center hover:bg-gray-700 transition cursor-pointer">
            <div className="bg-green-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="font-medium mb-2">Support Chat</h3>
            <p className="text-sm text-gray-400">24x7 Online Support</p>
          </div>

          <div className="bg-gray-600 rounded-lg p-6 text-center hover:bg-gray-700 transition cursor-pointer">
            <div className="bg-red-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-medium mb-2">Call Center</h3>
            <p className="text-sm text-gray-400">24x7 Customer Service</p>
          </div>

          <div className="bg-gray-600 rounded-lg p-6 text-center hover:bg-gray-700 transition cursor-pointer">
            <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-medium mb-2">Email</h3>
            <p className="text-sm text-gray-400">xyz@gmail.com</p>
          </div>

          <div className="bg-gray-600 rounded-lg p-6 text-center hover:bg-gray-700 transition cursor-pointer">
            <div className="bg-yellow-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="font-medium mb-2">FAQ</h3>
            <p className="text-sm text-gray-400">+50 Answers</p>
          </div>
        </div>
      </div>
      <div className='max-w-2xl mx-auto flex items-center justify-center mt-'>
        <Link to="/feedback" className="text-black hover:text-white">
            <button className='text-[12px] border-none rounded p-2 m-auto bg-slate-500' type="button">FeedBack</button>
        </Link>
      </div>
    </div>
  );
}

export default ContactUs;