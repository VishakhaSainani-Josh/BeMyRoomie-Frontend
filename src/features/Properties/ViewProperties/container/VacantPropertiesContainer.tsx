import { useSearchParams } from 'react-router';
import { useGetVacantPropertiesQuery } from '../api';
import VacantPropertiesComponent from '../component/VacantPropertiesComponent';
import { useEffect } from 'react';

const VacantPropertiesContainer = () => {
  const [searchParams] = useSearchParams();
  const isOwner = !!searchParams.get('owner');
  console.log('owner value is', isOwner);
  const { data, isLoading, error, refetch } = useGetVacantPropertiesQuery({
    isOwner
  });

  useEffect(() => {
    if (isOwner) refetch();
    console.log('useEffect');
  }, [isOwner, refetch]);

  console.log('API Response:', data, error);

  if (isLoading) return <p>Loading...</p>;
  if (error) {
    console.error('Error fetching properties:', error);
    return <p>Error loading properties. Check console.</p>;
  }
  return <VacantPropertiesComponent properties={data?.data} isLister={isOwner}/>;
};

export default VacantPropertiesContainer;
