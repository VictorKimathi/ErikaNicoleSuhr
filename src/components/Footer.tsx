import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
export function Footer() {
  return <footer className="bg-gray-50 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Erika Nicole Suhr</h3>
            <p className="text-gray-600 mb-4">Home & Lifestyle Copywriter</p>
            <p className="text-gray-600">
              Building Stories That Live Where People Do
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <div className="flex flex-col space-y-2">
              <a href="mailto:erikasuhr57@gmail.com" className="flex items-center text-gray-600 hover:text-teal-700 transition-colors">
                <Mail size={18} className="mr-2" />
                erikasuhr57@gmail.com
              </a>
              <a href="tel:+12064558574" className="flex items-center text-gray-600 hover:text-teal-700 transition-colors">
                <Phone size={18} className="mr-2" />
                (206) 455-8574
              </a>
              <div className="flex items-start text-gray-600">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>9011 Long Pickett Ct, Huntersville, NC 28078</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <ul className="flex flex-col space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-teal-700 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-teal-700 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-teal-700 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 hover:text-teal-700 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-teal-700 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Erika Nicole Suhr. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
}