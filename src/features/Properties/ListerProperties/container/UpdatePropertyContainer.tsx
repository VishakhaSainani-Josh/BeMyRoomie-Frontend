import { useState, useEffect } from 'react';
import { useUpdatePropertyMutation,  listerPropertyApi } from '../api';
import { useLocation, useNavigate } from 'react-router';
import UpdatePropertyComponent from '../component/UpdateProperty';
import { useGetParticularPropertyDetailsQuery } from '../../ViewProperties/api';
import { toast } from 'react-toastify';
import { ErrorType } from '@/shared/types/types';
import { useDispatch } from 'react-redux';
import { TAGTYPES } from '@/utils/constants/apiEndpointConstants';
const { PROPERTIES } = TAGTYPES;

const UpdatePropertyContainer = () => {
  const location = useLocation();
  const property_id = +location.pathname.split('/')[2];
  console.log(property_id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data } = useGetParticularPropertyDetailsQuery(property_id);
  const propertyData = data?.data;

  const [updateProperty] = useUpdatePropertyMutation();

  const [formData, setFormData] = useState({
    property_id: 0,
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

  useEffect(() => {
    if (propertyData) {
      setFormData({
        ...propertyData,
        rent:
          typeof propertyData.rent === 'string'
            ? Number(propertyData.rent)
            : propertyData.rent,
        vacancy:
          typeof propertyData.vacancy === 'string'
            ? Number(propertyData.vacancy)
            : propertyData.vacancy
      });

      setImageUrls(propertyData.images.join('\n'));
    }
  }, [propertyData]);

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

    const updatedPropertyData = {
      ...formData,
      images: processedImages
    };

    updatedPropertyData.property_id = property_id;

    try {
      await updateProperty(updatedPropertyData).unwrap();
      dispatch(listerPropertyApi.util.invalidateTags([PROPERTIES]));
      toast.success(data?.message);
      navigate('/properties');
    } catch (err) {
      const error = err as ErrorType;
      toast.error(error.data.message);
    }
  };

  return (
    <UpdatePropertyComponent
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

export default UpdatePropertyContainer;
