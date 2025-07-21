import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart, Coffee, MapPin, Calendar, ExternalLink, Download } from 'lucide-react';


const Footer = () => {

  return (
  <div className="space-y-4">
      <footer className="bg-white border-t border-gray-100 py-10">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-slate-500 to-gray-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">MB</span>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">Max Bauer</h3>
            <p className="text-gray-600">Product Designer • Writer • Coffee Enthusiast</p>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mb-8">
            <a href="mailto:jane@example.com" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
              <Mail className="w-5 h-5 mr-2" />
              max.bauer.wd@gmail.com
            </a>
            <div className="flex space-x-4">
              <a href="" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-gray-100 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
              <p>&copy; 2025 Max Bauer. All rights reserved.</p>
              <p className="mt-2 sm:mt-0">Currently available for freelance work</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )  
}

export default Footer;
