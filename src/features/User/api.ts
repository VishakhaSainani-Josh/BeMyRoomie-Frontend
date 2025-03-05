import { authorizedBaseQuery } from '@/apiConfig/baseQuery';
import {
  AddPreferenceBody,
  PreferenceResponse,
  UpdateProfileBody,
  UpdateProfileResponse,
  ViewProfileResponse
} from '@/shared/types/types';
import { createApi } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: authorizedBaseQuery(),
  tagTypes: ['User'],
  endpoints: builder => ({
    viewProfile: builder.query<ViewProfileResponse, void>({
      query: () => '/profile',
      providesTags: ['User']
    }),
    addPreferences: builder.mutation<PreferenceResponse, AddPreferenceBody>({
      query: preferences => ({
        url: '/preferences',
        method: 'POST',
        body: preferences
      }),
      invalidatesTags: ['User']
    }),
    updateProfile: builder.mutation<UpdateProfileResponse, UpdateProfileBody>({
      query: updatedProfile => ({
        url: '/profile',
        method: 'PATCH',
        body: updatedProfile
      }),
      invalidatesTags: ['User']
    })
  })
});

export const {
  useViewProfileQuery,
  useAddPreferencesMutation,
  useUpdateProfileMutation
} = userApi;
