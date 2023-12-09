// MainComponent.tsx
"use client"
import React, { useState, useEffect } from 'react';
import CardComponent from './CardComponent';
import { Pagination } from 'flowbite-react';

interface CardData {
  _id: string;
  companyName: string;
  title: string;
  location: string;
  type: string;
  requiredExperience: string;
  imageUrl: string;
  redirectLink: string;
  skills: string;
  salary: string;
}

const MainComponent: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [allData, setAllData] = useState<CardData[]>([]);
  const itemsPerPage = 4;

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.cuvette.tech/api/v1/externaljobs');
        if (response.ok) {
          const data = await response.json();
          setAllData(data.data);
        } else {
          // Handle errors if any
          console.error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(allData.length / itemsPerPage);

  return (
    <div className="container mx-auto">
      {currentItems.map((item) => (
        <CardComponent key={item._id} data={item} />
      ))}
      <div className="flex justify-center mt-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
};

export default MainComponent;
