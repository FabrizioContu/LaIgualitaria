import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-dvh w-dvw ">
      <Navbar />
      <main
        className="flex-grow font-poppins pt-20"
        id="main-content"
        tabIndex={-1}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
