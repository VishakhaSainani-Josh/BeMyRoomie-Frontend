import { useNavigate } from "react-router";
import { useViewProfileQuery } from "../api";
import { ViewProfileComponent } from "../component/ViewProfileComponent";

export const ViewProfileContainer: React.FC = () => {
    const navigate=useNavigate()
    const { data, isLoading, isError } = useViewProfileQuery();
    const profileResponse=data?.data
    const handleUpdateClick = () => {
      navigate('/profile/edit')
    };
  
    if (isLoading) {
      return <div>Loading profile...</div>;
    }
  
    if (isError || !profileResponse) {
      return <div>Error loading profile</div>;
    }
  
    return (
      <ViewProfileComponent 
        profile={profileResponse}
        onUpdateClick={handleUpdateClick}
      />
    );
  };
  
  