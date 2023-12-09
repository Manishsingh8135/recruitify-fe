// CardComponent.tsx
import React from 'react';
import Image from 'next/image';
import { Button } from 'flowbite-react';

interface CardData {
  user_id: string;
  company: string;
  roles: string[];
  locations: string;
  type: string;
  experience: string;
  imageUrl: string;
}

interface CardComponentProps {
  data: CardData;
}

const CardComponent: React.FC<CardComponentProps> = ({ data }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow p-4 m-4 rounded-lg flex flex-row items-center justify-between">
      {/* Image Section */}
      <div className="w-1/4 p-6" >
        <Image src={data.imageUrl} alt={data.company} width={100} height={100} layout="responsive" />
      </div>

      {/* Information Section */}
      <div className="w-1/2 text-gray-900 dark:text-white px-3">
        <p className="text-2xl font-bold mb-2">{data.company}</p>
        <p className="text-lg">{data.type}</p>
        <p className="text-lg">{data.experience}</p>
        <p className="text-lg">Roles: {data.roles.join(', ')}</p>
        <p className="text-lg">Location: {data.locations}</p>
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
