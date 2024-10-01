// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="bg-gradient-to-br from-fuchsia-950 to-slate-950 text-white py-10 mt-20">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {/* Kontaktinformationen */}
//         <div>
//           <h4 className="text-xl font-semibold mb-2">Kontakt</h4>
//           <p>jan@devmail.com</p>
//           <p>+49 123 456789</p>
//           <div className="flex gap-3 mt-2">
//             <a href="#" className="hover:text-primary">
//               GitHub
//             </a>
//             <a href="#" className="hover:text-primary">
//               LinkedIn
//             </a>
//           </div>
//         </div>

//         {/* Witziger Spruch */}
//         <div className="text-center">
//           <h4 className=" mb-2">
//             "Coding is like humor. If you have to explain it, it's bad."
//           </h4>
//           {/* <p>"Coding is like humor. If you have to explain it, it's bad."</p> */}
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="text-xl font-semibold mb-2 text-right">Navigation</h4>
//           <ul className="space-y-2 text-right">
//             <li>
//               <a href="home" className="hover:text-primary">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="skills" className="hover:text-primary">
//                 Skills
//               </a>
//             </li>
//             <li>
//               <a href="work-experience" className="hover:text-primary">
//                 Work Experience
//               </a>
//             </li>
//             <li>
//               <a href="projects" className="hover:text-primary">
//                 Projects
//               </a>
//             </li>
//             <li>
//               <a href="about" className="hover:text-primary">
//                 About Me
//               </a>
//             </li>
//             <li>
//               <a href="contact" className="hover:text-primary">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       {/* <div className="text-center mt-8 text-sm">
//         &copy; {new Date().getFullYear()} Jan Liedgens. Alle Rechte vorbehalten.
//       </div> */}
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-fuchsia-950 to-slate-950 text-white py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-4">
        {/* Footer Navigation */}
        <ul className="flex items-center gap-4 text-sm">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="menu-item"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="menu-item"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="menu-item"
            >
              Work Experience
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="menu-item"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="menu-item"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              className="menu-item"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Fun Fact */}
        <div className="text-center text-xs">
          <p>"Coding is like humor. If you have to explain it, it's bad."</p>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs">
          &copy; {new Date().getFullYear()} Jan Liedgens. Alle Rechte
          vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
