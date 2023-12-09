// CardComponent.tsx
import React from 'react';
import Image from 'next/image';
import { Button } from 'flowbite-react';

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

interface CardComponentProps {
  data: CardData;
}

const CardComponent: React.FC<CardComponentProps> = ({ data }) => {
  return (
    <div className="bg-white h-200 dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow p-4 m-4 rounded-lg flex flex-row items-center justify-between">
      {/* Image Section */}
      <div className="w-1/4 p-6">
        <Image src={data.imageUrl} alt={data.companyName} width={100} height={100} layout="responsive" />
      </div>

      {/* Information Section */}
      <div className="w-1/2 text-gray-900 dark:text-white px-3">
        <p className="text-2xl font-bold mb-2">{data.companyName}</p>
        <p className="text-lg">{data.type}</p>
        <p className="text-lg">{data.requiredExperience}</p>
        <p className="text-lg">Title: {data.title}</p>
        <p className="text-lg">Location: {data.location}</p>
      </div>

      {/* Button Section */}
      <div className="w-1/4 flex flex-col items-center">
        <Button color="blue" size="lg" className="mb-2 hover:bg-gray-700 px-4">
          View
        </Button>
        <Button color="success" size="lg" className="hover:bg-gray-700 px-4">
          Refer
        </Button>
      </div>
    </div>
  );
};

export default CardComponent;
