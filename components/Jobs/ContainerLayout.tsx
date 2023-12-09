import React from 'react';
import MainLayout from './MainLayout';
import Sidebarr from './SidebarLayout';
import RightMainComponent from './RightMainComponent';

const HomePage: React.FC = () => {
  return (
    <MainLayout 
      sidebar={<Sidebarr/>}
      content={<RightMainComponent/>}
    />
  );
};

export default HomePage;
