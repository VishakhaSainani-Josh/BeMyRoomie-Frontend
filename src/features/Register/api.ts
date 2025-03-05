import { baseQuery } from '@/apiConfig/baseQuery';
import { createApi } from '@reduxjs/toolkit/query/react';

export const registerApi = createApi({
  reducerPath: 'registerApi',
  baseQuery: baseQuery(),
  endpoints: builder => ({
    registerLister: builder.mutation({
      query: newLister => ({
        url: '/lister/signup',
        method: 'POST',
        body: newLister
      })
    }),
    registerFinder: builder.mutation({
      query: newFinder => ({
        url: '/finder/signup',
        method: 'POST',
        body: newFinder
      })
    })
  })
});

export const { useRegisterListerMutation, useRegisterFinderMutation } = registerApi;
