import { PropertyComponentProps } from '@/shared/types/types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const PostPropertyComponent: React.FC<PropertyComponentProps> = ({
  availableFacilities,
  genderOptions,
  statusOptions,
  errors,
  formData,
  handleChange,
  handleSubmit,
  handleCustomFacility,
  handleFacilityChange,
  handleImageUrlsChange,
  imageUrls,
  facilityInput,
  setFacilityInput
}) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6">Post a New Property</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
            Title*
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="e.g., Cozy Room in Hinjewadi"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="description"
          >
            Description*
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className={`w-full px-3 py-2 border rounded-lg ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Describe your property..."
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">{errors.description}</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="preferred_gender"
            >
              Preferred Gender
            </label>
            <select
              id="preferred_gender"
              name="preferred_gender"
              value={formData.preferred_gender}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              {genderOptions.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="status">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg"
            >
              {statusOptions.map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="city">
              City*
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="e.g., Pune"
            />
            {errors.city && (
              <p className="text-red-500 text-sm mt-1">{errors.city}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="address">
              Address*
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="e.g., Hinjewadi Phase 1"
            />
            {errors.address && (
              <p className="text-red-500 text-sm mt-1">{errors.address}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="rent">
              Rent (₹)*
            </label>
            <input
              type="number"
              id="rent"
              name="rent"
              value={formData.rent}
              onChange={handleChange}
              min="0"
              className={`w-full px-3 py-2 border rounded-lg ${errors.rent ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="e.g., 15000"
            />
            {errors.rent && (
              <p className="text-red-500 text-sm mt-1">{errors.rent}</p>
            )}
          </div>

          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="vacancy">
              Vacancy*
            </label>
            <input
              type="number"
              id="vacancy"
              name="vacancy"
              value={formData.vacancy}
              onChange={handleChange}
              min="1"
              className={`w-full px-3 py-2 border rounded-lg ${errors.vacancy ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="e.g., 1"
            />
            {errors.vacancy && (
              <p className="text-red-500 text-sm mt-1">{errors.vacancy}</p>
            )}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Facilities</label>
          <div className="flex flex-wrap gap-2 mb-2">
            {availableFacilities.map(facility => (
              <label key={facility} className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={formData.facilities.includes(facility)}
                  onChange={() => handleFacilityChange(facility)}
                  className="mr-1"
                />
                <span className="text-sm">{facility}</span>
              </label>
            ))}
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              value={facilityInput}
              onChange={e => setFacilityInput(e.target.value)}
              className="flex-grow px-3 py-2 border border-gray-300 rounded-lg"
              placeholder="Add custom facility"
            />
            <button
              type="button"
              onClick={handleCustomFacility}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Add
            </button>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {formData.facilities.map(facility => (
              <span
                key={facility}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center"
              >
                {facility}
                <button
                  type="button"
                  onClick={() => handleFacilityChange(facility)}
                  className="ml-1 text-blue-500 hover:text-blue-700"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="images">
            Image URLs* (One URL per line)
          </label>
          <textarea
            id="images"
            value={imageUrls}
            onChange={handleImageUrlsChange}
            rows={3}
            className={`w-full px-3 py-2 border rounded-lg ${errors.images ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="https://example.com/image1.jpg&#10;https://example.com/image2.jpg"
          />
          {errors.images && (
            <p className="text-red-500 text-sm mt-1">{errors.images}</p>
          )}
          <p className="text-sm text-gray-500 mt-1">
            Enter each image URL on a new line
          </p>
        </div>

        <div className="flex justify-between">
          <button
            type="button"
            onClick={() => navigate('/properties')}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            type="submit"
            className={"px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostPropertyComponent;
