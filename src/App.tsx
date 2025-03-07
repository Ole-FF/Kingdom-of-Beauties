import { ArrowRight, ChevronDown } from 'lucide-react';
import React from 'react';
import ScarlettImg from './pixies/Scarlett.jpg';
import LarnaImg from './pixies/Larna.jpg';
import SavanahImg from './pixies/Savanah.jpg';
import QuezalImg from './pixies/Quezal.jpg';
import VictoriaImg from './pixies/Victoria.jpg';
import SelenaImg from './pixies/Selena.jpg';
import RoxanneImg from './pixies/Roxanne.jpg';
import LorikImg from './pixies/Lorik.jpg';
import CarmenImg from './pixies/Carmen.jpg';
// PortalButton Component
interface PortalButtonProps {
  url: string;
  label: string;
}

const PortalButton = ({ url, label }: PortalButtonProps) => {
  const handleClick = () => {
    window.location.href = url;
  };

  return (
    <button 
      onClick={handleClick}
      className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all transform hover:scale-105 flex items-center mx-auto"
    >
      {label}
      <ArrowRight className="ml-2 h-5 w-5" />
    </button>
  );
};

// Default props
PortalButton.defaultProps = {
  url: "https://t.slext2.com/365625/7272?bo=2753,2754,2755,2756&popUnder=true&aff_sub5=SF_006OG000004lmDN",
  label: "Find More Beautiful Girls"
};

// ProfileCard Component
// ProfileCard Component
const ProfileCard = ({ id, name, image, category }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105">
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={`${name}'s profile`}
          className="w-full h-full object-cover transition-transform hover:scale-110 duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
          <span className="text-sm bg-emerald-100 text-emerald-800 py-1 px-3 rounded-full">{category}</span>
        </div>
        <PortalButton
          url="https://t.slext2.com/365625/7272?bo=2753,2754,2755,2756&popUnder=true&aff_sub5=SF_006OG000004lmDN"
          label={`Connect With ${name}`}
        />
      </div>
    </div>
  );
};

function App() {
  // Profile data (merged from both components)
  const profiles = [
    {
      id: 1,
      name: "Scarlett",
      image: ScarlettImg,
      category: "Cam Models"
    },
    {
      id: 2,
      name: "Larna",
      image: LarnaImg,
      category: "Single Moms"
    },
    {
      id: 3,
      name: "Savanah",
      image: SavanahImg,
      category: "Teens"
    },
    {
      id: 4,
      name: "Quezal",
      image: QuezalImg,
      category: "Cougars"
    },
    {
      id: 5,
      name: "Victoria",
      image: VictoriaImg,
      category: "Cam Models"
    },
    {
      id: 6,
      name: "Selena",
      image: SelenaImg,
      category: "Single Moms"
    },
    {
      id: 7,
      name: "Roxanne",
      image: RoxanneImg,
      category: "Cam Models"
    },
    {
      id: 8,
      name: "Lorik",
      image: LorikImg,
      category: "Single Moms"
    },
    {
      id: 9,
      name: "Carmen",
      image: CarmenImg,
      category: "Escorts"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-10 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">KB</span>
            </div>
            <h1 className="text-2xl font-bold text-emerald-800">Kingdom Of Beauties</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="https://t.slext2.com/365625/7272?bo=2753,2754,2755,2756&popUnder=true&aff_sub5=SF_006OG000004lmDN" className="text-gray-700 hover:text-emerald-600 transition-colors">Home</a>
            <a href="https://t.slext2.com/365625/5165?bo=2753,2754,2755,2756&popUnder=true&aff_sub5=SF_006OG000004lmDN" className="text-gray-700 hover:text-emerald-600 transition-colors">Explore</a>
            <a href="https://t.slext2.com/365625/7272?bo=2753,2754,2755,2756&popUnder=true&aff_sub5=SF_006OG000004lmDN" className="text-gray-700 hover:text-emerald-600 transition-colors">About Us</a>
            <a href="https://t.slext2.com/365625/8490/0?bo=2753,2754,2755,2756&po=6456&aff_sub5=SF_006OG000004lmDN" className="text-gray-700 hover:text-emerald-600 transition-colors">Contact</a>
          </div>
          <button className="md:hidden text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-18 pb-12 px-6 bg-gradient-to-b from-emerald-50 to-sky-50">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-4 leading-tight">
            Connect With Beautiful Girls From Around The World And <span className="text-emerald-600">Ready To Be Your Girlfriend</span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">
            Welcome to the Kingdom of Beauties. We have thousands of rare and beautiful girls from around the world. 
            You can find the perfect girl in Kingdom of Beauties ready for dating through our network.
            You Be The King! All of our girls are 18+ and come ready to mingle. This is a worldwide service. 
            Once you identify the girl you like, just click on the "Chat With" button to connect with your crash.".
          </p>
          <PortalButton 
            url="https://t.slext2.com/365625/5165?bo=2753,2754,2755,2756&popUnder=true&aff_sub5=SF_006OG000004lmDN"
            label="Find More Beautiful Girls"
          />
          <div className="mt-4">
            <PortalButton 
              url="/password-instructions.html"
              label="Password Instructions!"
            />
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="flex justify-center -mt-10 mb-10 animate-bounce">
        <ChevronDown className="h-8 w-8 text-emerald-600" />
      </div>

      {/* Profile Gallery Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-emerald-800 mb-12">Latest Arrivals To The Kingdom</h2>
          
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {profiles.slice(0, 3).map((profile) => (
              <ProfileCard key={profile.id} {...profile} />
            ))}
          </div>
          
          <div className="text-center mb-16">
            <PortalButton 
              url="https://t.slext2.com/365625/8490/0?bo=2753,2754,2755,2756&po=6456&aff_sub5=SF_006OG000004lmDN"
              label="Discover more Girls inside the Kingdom Of Beauties"
            />
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {profiles.slice(3, 6).map((profile) => (
              <ProfileCard key={profile.id} {...profile} />
            ))}
          </div>
          
          <div className="text-center mb-16">
            <PortalButton 
              url="https://t.acrsmartcam.com/365625/4152?bo=2779,2778,2777,2776,2775&popUnder=true&aff_sub5=SF_006OG000004lmDN"
              label="Explore the Diversity of the Kingdom Of Beauties"
            />
          </div>

          {/* Third Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {profiles.slice(6, 9).map((profile) => (
              <ProfileCard key={profile.id} {...profile} />
            ))}
          </div>
          
          <div className="text-center">
            <PortalButton 
              url="https://t.acrsmartcam.com/365625/7348?bo=2779,2778,2777,2776,2775&popUnder=true&aff_sub5=SF_006OG000004lmDN"
              label="Uncover More Treasures in the Kingdom Of Beauties"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready To Meet Your Girlfriend?</h2>
          <p className="text-lg mb-8 opacity-90">
            Inside the Kingdom Of Beauties, You Will Meet Beautiful Girls From All Over The World 
            And You Will Be The King Of The Kingdom. So Be The King!
          </p>
          <PortalButton 
            url="https://t.slext2.com/365625/9612/0?bo=2753,2754,2755,2756&po=6456&aff_sub5=SF_006OG000004lmDN"
            label="Explore The Kingdom Of Beauties"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">KB</span>
                </div>
                <h3 className="text-xl font-bold">Kingdom Of Beauties</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Connecting Kings and Princes with Beautiful Girls From All Over The World.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="https://t.slext2.com/365625/7272?bo=2753,2754,2755,2756&popUnder=true&aff_sub5=SF_006OG000004lmDN" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="https://t.slext2.com/365625/5165?bo=2753,2754,2755,2756&popUnder=true&aff_sub5=SF_006OG000004lmDN" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="https://t.slext2.com/365625/7272?bo=2753,2754,2755,2756&popUnder=true&aff_sub5=SF_006OG000004lmDN" className="text-gray-400 hover:text-white transition-colors">Explore</a></li>
                <li><a href="https://t.slext2.com/365625/8490/0?bo=2753,2754,2755,2756&po=6456&aff_sub5=SF_006OG000004lmDN" className="text-gray-400 hover:text-white transition-colors">Guides</a></li>
                <li><a href="https://t.slext2.com/365625/7511/0?bo=2753,2754,2755,2756&po=6456&aff_sub5=SF_006OG000004lmDN" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Girls Categories</h3>
              <ul className="space-y-2">
                <li><a href="https://t.acrsmartcam.com/365625/4152?bo=2779,2778,2777,2776,2775&popUnder=true&aff_sub5=SF_006OG000004lmDN" className="text-gray-400 hover:text-white transition-colors">Teens</a></li>
                <li><a href="https://t.acrsmartcam.com/365625/7012?bo=2779,2778,2777,2776,2775&popUnder=true&aff_sub5=SF_006OG000004lmDN" className="text-gray-400 hover:text-white transition-colors">Single Moms</a></li>
                <li><a href="https://t.acrsmartcam.com/365625/7348?bo=2779,2778,2777,2776,2775&popUnder=true&aff_sub5=SF_006OG000004lmDN" className="text-gray-400 hover:text-white transition-colors">Cougars</a></li>
                <li><a href="https://t.slext2.com/365625/9612/0?bo=2753,2754,2755,2756&po=6456&aff_sub5=SF_006OG000004lmDN" className="text-gray-400 hover:text-white transition-colors">Cam Models</a></li>
                <li><a href="https://t.slext2.com/365625/9614/0?bo=2753,2754,2755,2756&po=6456&aff_sub5=SF_006OG000004lmDN" className="text-gray-400 hover:text-white transition-colors">Escorts</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>123 Aviary Lane, Bird City, BC 12345</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>info@kingdomofbeauties.com</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 mr-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Kingdom Of Beauties. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;