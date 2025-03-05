import { Button } from '@/components/ui/button';
import { PropertyDetailsComponentProps } from '@/shared/types/types';
import { MapPin, Home, User, Calendar, Tag, Check } from 'lucide-react';
import React from 'react';

const PropertyDetailsComponent: React.FC<PropertyDetailsComponentProps> = ({
  propertyData,
  currentImageIndex,
  role,
  handleShowInterestClick,
  handleRemoveInterestClick
}) => {
  return (
    <div className="w-full max-w-full bg-white shadow-md rounded-lg overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-1/2 p-6 md:p-8">
          <div className="flex items-center text-blue-500 mb-3">
            <MapPin size={20} className="mr-2" />
            <span className="text-lg">{propertyData.city}</span>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            {propertyData.title} in {propertyData.address}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex items-center">
              <Home size={20} className="text-gray-600 mr-3" />
              <span className="text-gray-700">Room</span>
            </div>

            <div className="flex items-center">
              <User size={20} className="text-gray-600 mr-3" />
              <span className="text-gray-700">
                {propertyData.preferred_gender} only
              </span>
            </div>

            <div className="flex items-center">
              <Calendar size={20} className="text-gray-600 mr-3" />
              <span className="text-gray-700">Vacancy: {propertyData.vacancy}</span>
            </div>

            <div className="flex items-center">
              <Tag size={20} className="text-gray-600 mr-3" />
              <span className="text-gray-700">₹{propertyData.rent}/month</span>
            </div>
          </div>

          <p className="text-gray-600 mb-6">{propertyData.description}</p>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Facilities:</h2>
            <div className="flex flex-wrap gap-3">
              {propertyData.facilities.map((facility, index) => (
                <div
                  key={index}
                  className="bg-blue-50 text-blue-600 rounded-full px-4 py-2 flex items-center"
                >
                  <Check size={16} className="mr-2" />
                  <span>{facility}</span>
                </div>
              ))}
            </div>
          </div>
          {role == 'finder' ? (
            <div className="flex gap-4">
              <Button
                className="py-2 px-4 text-sm bg-blue-600 hover:bg-blue-700"
                onClick={() => {
                  handleShowInterestClick();
                }}
              >
                Show Interest
              </Button>
              <Button
                className="py-2 px-4 text-sm bg-red-600 hover:bg-blue-700"
                onClick={() => {
                  handleRemoveInterestClick();
                }}
              >
                Remove Interest
              </Button>
            </div>
          ) : (
            <></>
          )}
        </div>

        <div className="lg:w-1/2 h-96 lg:h-auto relative">
          {propertyData.images.map((imageUrl, index) => (
            <div
              key={index}
              className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
              style={{
                opacity: index === currentImageIndex ? 1 : 0,
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default PropertyDetailsComponent;
