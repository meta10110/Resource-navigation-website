import React from 'react';
import { getFooter } from '../utils/loadContent';

function Footer() {
  const footer = getFooter();
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-300 py-12 border-t border-gray-700">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6"></div>
          <p className="text-sm text-gray-400">{footer.disclaimer}</p>
          <p className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            {footer.copyright}
          </p>
          <div className="flex justify-center space-x-6 text-sm pt-4">
            {footer.links.map((link, index) => (
              <React.Fragment key={index}>
                {index > 0 && <span className="text-gray-600">•</span>}
                <a 
                  href={link.href} 
                  className="hover:text-blue-400 transition-all duration-200 transform hover:scale-110"
                >
                  {link.text}
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;