import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-industrial-charcoal text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6">
              DHARATI INDUSTRIES
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Innovating furniture machinery with advanced engineering solutions
              since 2005.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-white hover:text-industrial-blue transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                className="text-white hover:text-industrial-blue transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-white hover:text-industrial-blue transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-industrial-blue transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/machines"
                  className="text-gray-300 hover:text-industrial-blue transition-colors"
                >
                  Machines
                </Link>
              </li>
              <li>
                <Link
                  to="/company"
                  className="text-gray-300 hover:text-industrial-blue transition-colors"
                >
                  Company Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-gray-300 hover:text-industrial-blue transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-industrial-blue transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-display text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-industrial-blue flex-shrink-0" />
                <span className="text-gray-300">
                  123 Industry Avenue, Manufacturing District, 400001
                </span>
              </li>
              <li>
                <a
                  href="https://wa.me/917434052955?text=Hello%20My%20name%20is%20prince%20patel%20."
                  target="_blank"
                  className="flex items-center text-gray-300 hover:text-industrial-blue transition-colors"
                >
                  <Phone className="mr-2 h-5 w-5 text-industrial-blue" />
                  <span>+91 743 405 2955</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@dharatiindustries.com"
                  target="_blank"
                  className="flex items-center text-gray-300 hover:text-industrial-blue transition-colors"
                >
                  <Mail className="mr-2 h-5 w-5 text-industrial-blue" />
                  <span>info@dharatiindustries.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-display text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to receive the latest news and updates.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-industrial-blue"
              />
              <button
                type="submit"
                className="bg-industrial-blue text-white py-2 px-4 rounded hover:bg-opacity-90 transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Dharati Industries. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
