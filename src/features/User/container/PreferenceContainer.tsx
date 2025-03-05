import { useState } from 'react';
import { useAddPreferencesMutation } from '../api';
import { toast } from 'react-toastify';
import { PreferenceComponent } from '../component/PreferenceComponent';
import { ErrorType } from '@/shared/types/types';
import { useNavigate } from 'react-router';

export const PreferenceContainer: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string>('');

  const [addPreferences] = useAddPreferencesMutation();

  const availableTags = [
    'Smoker',
    'Non-Smoker',
    'Vegetarian',
    'Non-Vegetarian',
    'Early Bird',
    'Night Owl',
    'Drinker',
    'Non-Drinker',
    'Pet Lover',
    'Allergic to Pets'
  ];

  const handleSubmit = async () => {
    try {
      const response = await addPreferences({
        tags: selectedTags,
        city: selectedCity
      }).unwrap();

      toast.success(response.message);
      navigate('/properties');
    } catch (err) {
      const error = err as ErrorType;
      toast(error.data.message);
    }
  };

  return (
    <PreferenceComponent
      tags={availableTags}
      onTagsChange={setSelectedTags}
      onCityChange={setSelectedCity}
      onSubmit={handleSubmit}
      selectedTags={selectedTags}
      selectedCity={selectedCity}
    />
  );
};

export default PreferenceContainer;
