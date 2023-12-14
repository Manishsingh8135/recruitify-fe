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
    <div className="flex w-full overflow-hidden">
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="md:hidden fixed top-[50px] right-5 z-30 text-3xl"
      >
        {isSidebarOpen ? '✖️' : '☰'} {/* Cross icon when open, Hamburger menu when closed */}
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'md:w-3/10' : 'hidden md:block md:w-3/10'
        } bg-gray-200 h-screen overflow-y-auto fixed md:relative left-0 top-0 z-20`}
      >
        {sidebar}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-hidden">
        <div className="h-full overflow-y-auto">
          {content}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
