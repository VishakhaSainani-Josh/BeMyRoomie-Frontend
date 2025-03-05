import { useGetInterestedPropertiesQuery } from '../api';
import VacantPropertiesComponent from '@/features/Properties/ViewProperties/component/VacantPropertiesComponent';

const ViewInterestedPropertiesContainer = () => {
  const { data } = useGetInterestedPropertiesQuery();
  return <VacantPropertiesComponent properties={data?.data} isLister={false} />;
};

export default ViewInterestedPropertiesContainer;
