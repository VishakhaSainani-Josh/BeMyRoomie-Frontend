import { authorizedBaseQuery } from '@/apiConfig/baseQuery';
import {
  PropertyDetailsResponse,
  VacantPropertiesResponse
} from '@/shared/types/types';
import { TAGTYPES } from '@/utils/constants/apiEndpointConstants';
import { createApi } from '@reduxjs/toolkit/query/react';
const {PROPERTIES}=TAGTYPES

export const viewPropertiesApi = createApi({
  reducerPath: 'propertiesApi',
  baseQuery: authorizedBaseQuery(),
  tagTypes: [PROPERTIES],
  endpoints: builder => ({
    getVacantProperties: builder.query<
      VacantPropertiesResponse,
      { isOwner: boolean }
    >({
      query: ({ isOwner }) => {
        const params = new URLSearchParams();
        if (isOwner) params.append('owner', 'true');
        return `/properties?${params.toString()}`;
      },
      providesTags: [PROPERTIES]
    }),
    getParticularPropertyDetails: builder.query<PropertyDetailsResponse, number>({
      query: property_id => `/properties/${property_id}`,
      providesTags: [PROPERTIES]
    })
  })
});

export const { useGetVacantPropertiesQuery, useGetParticularPropertyDetailsQuery } =
  viewPropertiesApi;
