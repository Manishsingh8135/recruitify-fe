"use client"
import React, { useState } from 'react';

interface MainLayoutProps {
  sidebar: React.ReactNode;
  content: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ sidebar, content }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row w-full">
      {/* Toggle Button */}
      <button onClick={toggleSidebar} className="md:hidden fixed top-[50px] right-5 z-30 text-3xl">
  {isSidebarOpen ? '✖️' : '☰'} {/* Cross icon when open, Hamburger menu when closed */}
</button>



      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-20 md:relative md:translate-x-0 md:w-3/10`}>
        {sidebar}
      </div>

      {/* Content */}
      <div className={`flex-1 ${isSidebarOpen ? 'md:w-7/10' : 'w-full'}`}>
        {content}
      </div>
    </div>
  );
};

export default MainLayout;
