import { useGetInterestedUsersQuery } from '../api';
import { ViewInterestedUsersComponent } from '../component/ViewInterestedUsersComponent';
import { useLocation } from 'react-router';

export const ViewInterestedUsersContainer = () => {
  const location = useLocation();
  const property_id = +location.pathname.split('/')[3];
  const {
    data: interestedUsersResponse,
    isLoading,
    isError
  } = useGetInterestedUsersQuery(property_id);

  if (isLoading) {
    return <div className="text-center mt-10">Loading interested users...</div>;
  }

  if (!interestedUsersResponse?.data)
    return (
      <div className="text-center mt-10 text-green-800 ">
        No Users shown interest
      </div>
    );

  if (isError) {
    return (
      <div className="text-center mt-10 text-destructive">
        Error loading interested users
      </div>
    );
  }

  console.log('from interested coponenent', interestedUsersResponse.data);
  return (
    <ViewInterestedUsersComponent
      users={interestedUsersResponse.data}
      propertyId={property_id}
    />
  );
};
