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
        className="md:hidden fixed top-[60px] left-0 z-20 text-2xl bg-gray-200 rounded-full p-2 px-3"
      >
        {isSidebarOpen ? '✖️' : '☰'} {/* Cross icon when open, Hamburger menu when closed */}
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? 'md:w-3/10' : 'hidden md:block md:w-3/10 '
        } bg-gray-200 h-screen overflow-y-auto fixed md:relative    z-10`}
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
