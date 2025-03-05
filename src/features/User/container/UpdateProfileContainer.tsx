import { toast } from 'react-toastify';
import { useUpdateProfileMutation, useViewProfileQuery } from '../api';
import { ErrorType } from '@/shared/types/types';
import { UpdateProfileComponent } from '../component/UpdateProfileComponent';

export const UpdateProfileContainer: React.FC = () => {
  const { data: profileResponse, isLoading: isProfileLoading } =
    useViewProfileQuery();
  const [updateProfile] = useUpdateProfileMutation();

  const availableTags = [
    'Early Bird',
    'Night Owl',
    'Vegetarian',
    'Non-Vegetarian',
    'Smoker',
    'Non-Smoker'
  ];

  const handleProfileUpdate = async (updatedProfile: {
    name: string;
    email: string;
    phone: string;
    gender: 'Male' | 'Female';
    city: string;
    required_vacancy: number;
    tags: string[];
  }) => {
    try {
      const response = await updateProfile(updatedProfile).unwrap();

      toast.success(response.message);
    } catch (err) {
      const error = err as ErrorType;
      toast(error.data.message);
    }
  };

  if (isProfileLoading) {
    return <div>Loading profile...</div>;
  }

  if (!profileResponse?.data) {
    return <div>Error loading profile</div>;
  }

  const { data: profile } = profileResponse;

  return (
    <UpdateProfileComponent
      initialProfile={{
        name: profile.name,
        email: profile.email,
        phone: profile.phone,
        gender: profile.gender,
        city: profile.city,
        required_vacancy: profile.required_vacancy,
        tags: profile.tags || []
      }}
      availableTags={availableTags}
      onSubmit={handleProfileUpdate}
    />
  );
};
