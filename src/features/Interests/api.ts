import { VacantPropertiesResponse } from './../../shared/types/types';
import { authorizedBaseQuery } from '@/apiConfig/baseQuery';
import {
  GetInterestedUsersResponse,
  RemoveInterestResponse,
  ShowInterestResponse
} from '@/shared/types/types';
import { createApi } from '@reduxjs/toolkit/query/react';

export const interestApi = createApi({
  reducerPath: 'interestApi',
  baseQuery: authorizedBaseQuery(),
  tagTypes: ['Interests'],
  endpoints: builder => ({
    getInterestedUsers: builder.query<GetInterestedUsersResponse, number>({
      query: property_id => `/interests/properties/${property_id}`,
      providesTags: ['Interests']
    }),
    showInterest: builder.mutation<ShowInterestResponse, number>({
      query: property_id => ({
        url: `/interest/${property_id}`,
        method: 'POST'
      }),
      invalidatesTags: ['Interests']
    }),
    removeInterest: builder.mutation<RemoveInterestResponse, number>({
      query: property_id => ({
        url: `/interests/properties/${property_id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Interests']
    }),
    getInterestedProperties: builder.query<VacantPropertiesResponse, void>({
      query: () => '/interests/properties',
      providesTags: ['Interests']
    })
  })
});

export const {
  useGetInterestedUsersQuery,
  useShowInterestMutation,
  useRemoveInterestMutation,
  useGetInterestedPropertiesQuery
} = interestApi;
