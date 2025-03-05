import { useState } from 'react';
import { usePostPropertyMutation } from '../api';
import { useNavigate } from 'react-router';
import PostPropertyComponent from '../component/PostProperty';
import { ErrorType } from '@/shared/types/types';
import { toast } from 'react-toastify';

const PostPropertyContainer = () => {
  const navigate = useNavigate();
  const [postProperty] = usePostPropertyMutation();

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    preferred_gender: 'Male',
    city: '',
    address: '',
    rent: 0,
    status: 'vacant',
    facilities: [] as string[],
    vacancy: 1,
    images: [] as string[]
  });

  const [imageUrls, setImageUrls] = useState('');
  const [facilityInput, setFacilityInput] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const availableFacilities = [
    'AC',
    'Balcony',
    'WiFi',
    'Parking',
    'Gym',
    'Swimming Pool',
    'Laundry',
    'Security',
    'Furnished'
  ];
  const genderOptions = ['Male', 'Female'];
  const statusOptions = ['vacant', 'fulfilled'];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'rent' || name === 'vacancy' ? Number(value) : value
    });
  };

  const handleFacilityChange = (facility: string) => {
    const updatedFacilities = formData.facilities.includes(facility)
      ? formData.facilities.filter(f => f !== facility)
      : [...formData.facilities, facility];

    setFormData({ ...formData, facilities: updatedFacilities });
  };

  const handleCustomFacility = () => {
    if (
      facilityInput.trim() !== '' &&
      !formData.facilities.includes(facilityInput)
    ) {
      setFormData({
        ...formData,
        facilities: [...formData.facilities, facilityInput.trim()]
      });
      setFacilityInput('');
    }
  };

  const handleImageUrlsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setImageUrls(e.target.value);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.description.trim())
      newErrors.description = 'Description is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    if (formData.rent <= 0) newErrors.rent = 'Rent must be greater than 0';
    if (formData.vacancy <= 0) newErrors.vacancy = 'Vacancy must be greater than 0';
    if (formData.images.length === 0 && !imageUrls.trim())
      newErrors.images = 'At least one image URL is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const processedImages = imageUrls
      .split('\n')
      .map(url => url.trim())
      .filter(url => url !== '');

    const propertyData = {
      ...formData,
      images: processedImages
    };

    try {
      await postProperty(propertyData).unwrap();
      toast.success('Property posted successfully!');
      navigate('/properties');
    } catch (err) {
      const error=err as ErrorType
      toast.error(error.data.message)
    }
  };
  return (
    <PostPropertyComponent
      handleChange={handleChange}
      handleCustomFacility={handleCustomFacility}
      handleFacilityChange={handleFacilityChange}
      handleImageUrlsChange={handleImageUrlsChange}
      handleSubmit={handleSubmit}
      availableFacilities={availableFacilities}
      genderOptions={genderOptions}
      facilityInput={facilityInput}
      setFacilityInput={setFacilityInput}
      imageUrls={imageUrls}
      formData={formData}
      errors={errors}
      statusOptions={statusOptions}
    />
  );
};

export default PostPropertyContainer;
