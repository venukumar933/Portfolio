import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-dark text-center py-2 bg-dark text-white">
      <p className="mb-0">
        &copy; {new Date().getFullYear()} Venu Kumar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
