// MainComponent.tsx
"use client"
import React, { useState } from 'react';
import CardComponent from './CardComponent';
import { Pagination } from 'flowbite-react';

interface CardData {
    user_id: string;
    company: string;
    roles: string[];
    locations: string;
    type: string;
    experience: string;
    imageUrl: string;
  }

const allData: CardData[] = [
  {
    user_id: "1",
    company: "Google",
    roles: ["Front-end Developer", "UI/UX Designer"],
    locations: "Mountain View, CA",
    type: "Tech",
    experience: "5+ years",
    imageUrl: "/assets/meta.png" // Replace with actual image paths
  },
  {
    user_id: "1",
    company: "Meta",
    roles: ["Front-end Developer", "UI/UX Designer"],
    locations: "Mountain View, CA",
    type: "Tech",
    experience: "5+ years",
    imageUrl: "/assets/google.png" // Replace with actual image paths
  },{
    user_id: "1",
    company: "OpenAi",
    roles: ["Front-end Developer", "UI/UX Designer"],
    locations: "Mountain View, CA",
    type: "Tech",
    experience: "5+ years",
    imageUrl: "/assets/openai.png" // Replace with actual image paths
  },{
    user_id: "1",
    company: "Netflix",
    roles: ["Front-end Developer", "UI/UX Designer"],
    locations: "Mountain View, CA",
    type: "Tech",
    experience: "5+ years",
    imageUrl: "/assets/netflix.png" // Replace with actual image paths
  },{
    user_id: "1",
    company: "Microsoft",
    roles: ["Front-end Developer", "UI/UX Designer"],
    locations: "Mountain View, CA",
    type: "Tech",
    experience: "5+ years",
    imageUrl: "/assets/ms.png" // Replace with actual image paths
  },{
    user_id: "1",
    company: "Google",
    roles: ["Front-end Developer", "UI/UX Designer"],
    locations: "Mountain View, CA",
    type: "Tech",
    experience: "5+ years",
    imageUrl: "/assets/google.png" // Replace with actual image paths
  },
];

const MainComponent: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3; // Change this number to set items per page
  
    // Calculate the index of the first and last item on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
    // Slice the data array to get only the items for the current page
    const currentItems = allData.slice(indexOfFirstItem, indexOfLastItem);
  
    // Calculate total pages
    const totalPages = Math.ceil(allData.length / itemsPerPage);
  
    return (
      <div className="container mx-auto">
        {currentItems.map(item => (
          <CardComponent key={item.user_id} data={item} />
        ))}
        <div className="flex justify-center mt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={page => setCurrentPage(page)}
          />
        </div>
      </div>
    );
  };
  
  export default MainComponent;
