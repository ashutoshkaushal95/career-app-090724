import React from "react";

const footerLinks = [
  { name: "About", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Licensing", href: "#" },
  { name: "Contact", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-white  shadow w-full  bottom-0">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2024{" "}
          <a href="#" className="hover:underline">
            Career App
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          {footerLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className={`hover:underline ${
                  index < footerLinks.length - 1 ? "me-4 md:me-6" : ""
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
