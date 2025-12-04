import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import ksaLogo from "@/assets/KSA-Logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={ksaLogo} alt="KSA" className="h-16 w-auto" />
              <div>
                <h3 className="font-bold text-xl">King Standard Academy</h3>
                <p className="text-sm text-background/70">Building Bold Minds</p>
              </div>
            </div>
            <p className="text-background/70 max-w-md">
              KSA: Where bold minds become global voices. Join us to learn, build, and belong.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-background/70 hover:text-background transition-colors">Home</Link></li>
              <li><Link to="/student-info" className="text-background/70 hover:text-background transition-colors">Student Info</Link></li>
              <li><Link to="/class-allocation" className="text-background/70 hover:text-background transition-colors">Class Allocation</Link></li>
              <li><Link to="/payment-tracking" className="text-background/70 hover:text-background transition-colors">Payment Tracking</Link></li>
              <li><Link to="/register" className="text-background/70 hover:text-background transition-colors">Register</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-background/70">
                <Mail className="w-4 h-4" />
                <span>info@ksa.edu</span>
              </li>
              <li className="flex items-center gap-2 text-background/70">
                <Phone className="w-4 h-4" />
                <span>+237 XXX XXX XXX</span>
              </li>
              <li className="flex items-start gap-2 text-background/70">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Cameroon</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60 text-sm">
          <p>© {new Date().getFullYear()} King Standard Academy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
