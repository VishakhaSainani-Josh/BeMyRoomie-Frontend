import React, { useState, useEffect } from 'react';
import { useGetParticularPropertyDetailsQuery } from '../api';
import { useLocation, useNavigate } from 'react-router';
import PropertyDetailsComponent from '../component/PropertyDetailsComponent';
import { getUserInfo } from '@/utils/helpers/helper';
import {
  useRemoveInterestMutation,
  useShowInterestMutation
} from '@/features/Interests/api';
import { ErrorType } from '@/shared/types/types';
import { toast } from 'react-toastify';

const PropertyDetailsContainer: React.FC = () => {
  const userRole = getUserInfo().role;
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const location = useLocation();
  const property_id = +location.pathname.split('/')[2];
  const {
    data: propertyData,
    isLoading,
    error
  } = useGetParticularPropertyDetailsQuery(property_id);

  const [showInterest] = useShowInterestMutation();
  const [removeInterest] = useRemoveInterestMutation();

  useEffect(() => {
    if (!propertyData?.data?.images?.length) return;

    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === propertyData.data.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [propertyData?.data?.images?.length]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading property details</div>;
  if (!propertyData) return <div>No property data available</div>;

  const handleShowInterestClick = async () => {
    try {
      const response = await showInterest(property_id).unwrap();
      toast.success(response.message);
    } catch (err) {
      const error = err as ErrorType;
      toast(error.data.message);
    }
  };

  const handleRemoveInterestClick = async () => {
    try {
      const response = await removeInterest(property_id).unwrap();
      toast.success(response.message);
    } catch (err) {
      const error = err as ErrorType;
      toast(error.data.message);
    }
  };

  return (
    <div>
      <button
        className="bg-gray-500 text-white rounded-l-md border-r border-gray-100 py-2 hover:bg-red-700 hover:text-white px-3 mb-3"
        onClick={() => navigate('/properties')}
        aria-label="Back to properties"
      >
        ←
      </button>
      <PropertyDetailsComponent
        propertyData={propertyData.data}
        currentImageIndex={currentImageIndex}
        role={userRole}
        handleShowInterestClick={handleShowInterestClick}
        handleRemoveInterestClick={handleRemoveInterestClick}
      />
    </div>
  );
};

export default PropertyDetailsContainer;
