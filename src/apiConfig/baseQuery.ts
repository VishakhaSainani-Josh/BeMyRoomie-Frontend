import { fetchBaseQuery } from '@reduxjs/toolkit/query';

export const baseQuery = () => {
  return fetchBaseQuery({
    baseUrl: 'http://localhost:8080'
  });
};

export const authorizedBaseQuery = () => {
  return fetchBaseQuery({
    baseUrl: 'http://localhost:8080',
    prepareHeaders: headers => {
      const token = localStorage.getItem('token'); 
      console.log("hello",token)
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    }
  });
};


