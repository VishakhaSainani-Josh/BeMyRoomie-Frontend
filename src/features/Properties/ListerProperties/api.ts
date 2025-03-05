import { authorizedBaseQuery } from '@/apiConfig/baseQuery';
import { UpdateProperty, UpdatePropertyResponse } from '@/shared/types/types';
import { PROPERTY_ENDPOINTS, TAGTYPES } from '@/utils/constants/apiEndpointConstants';
import { createApi } from '@reduxjs/toolkit/query/react';
const { POST_PROPERTY } = PROPERTY_ENDPOINTS;
const {PROPERTIES}=TAGTYPES
export const listerPropertyApi = createApi({
  reducerPath: 'listerPropertyApi',
  baseQuery: authorizedBaseQuery(),
  tagTypes: [PROPERTIES],
  endpoints: builder => ({
    postProperty: builder.mutation({
      query: newProperty => ({
        url: POST_PROPERTY,
        method: 'POST',
        body: newProperty
      }),
      invalidatesTags: [PROPERTIES]
    }),
    updateProperty: builder.mutation<UpdatePropertyResponse, UpdateProperty>({
      query: updatedProperty => ({
        url: `/properties/${updatedProperty.property_id}`,
        method: 'PATCH',
        body: updatedProperty
      }),
      invalidatesTags: [PROPERTIES]
    })
  })
});

export const { usePostPropertyMutation, useUpdatePropertyMutation, util } =
  listerPropertyApi;
