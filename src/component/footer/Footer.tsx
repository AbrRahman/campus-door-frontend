import { Link } from "react-router";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-violet-900 ">
      <div className="container mx-auto px-4 lg:px-20 py-12 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
          {/* brand */}
          <div>
            <h1 className="text-2xl font-semibold text-slate-100">
              CampusDoor
            </h1>
            <p className="mt-2.5 text-base text-slate-300">
              A platform to explore colleges, apply for admissions, and share
              your experiences with others.
            </p>
          </div>
          {/* quick link */}
          <div>
            <h2 className="text-slate-100 text-xl font-semibold">
              Quick Links
            </h2>
            <div className="mt-2.5 space-y-2">
              <div>
                <Link
                  to="/"
                  className="text-slate-200 hover:text-slate-300 transition duration-300"
                >
                  Home
                </Link>
              </div>

              <div>
                <Link
                  to="/college"
                  className="text-slate-200 hover:text-slate-300 transition duration-300"
                >
                  College
                </Link>
              </div>
              <div>
                <Link
                  to="/admission"
                  className="text-slate-200 hover:text-slate-300 transition duration-300"
                >
                  Admission
                </Link>
              </div>
              <div>
                <Link
                  to="/my-college"
                  className="text-slate-200 hover:text-slate-300 transition duration-300"
                >
                  My College
                </Link>
              </div>
            </div>
          </div>
          {/* social link */}
          <div>
            <h2 className="text-slate-100 text-xl font-semibold">Follow Us</h2>
            <div className="mt-2 flex space-x-4">
              <a
                href=""
                className="p-3 rounded-full bg-violet-700 hover:bg-violet-600 transition duration-300"
              >
                <FaFacebookF className="size-6 text-slate-200" />
              </a>
              <a
                href=""
                className="p-3 rounded-full bg-violet-700 hover:bg-violet-600 transition duration-300"
              >
                <FaTwitter className="size-6 text-slate-200" />
              </a>
              <a
                href=""
                className="p-3 rounded-full bg-violet-700 hover:bg-violet-600 transition duration-300"
              >
                <FaInstagram className="size-6 text-slate-200" />
              </a>
              <a
                href=""
                className="p-3 rounded-full bg-violet-700 hover:bg-violet-600 transition duration-300"
              >
                <FaLinkedinIn className="size-6 text-slate-200" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-violet-700 text-center py-4 text-sm text-slate-400">
        © {new Date().getFullYear()} Ab Rahman. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
