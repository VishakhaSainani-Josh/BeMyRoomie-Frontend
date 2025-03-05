// import { authApi, registerApi } from '@/features/Register/api';
// import { createSlice } from '@reduxjs/toolkit';

// interface RegisterState {
//   success: boolean;
//   error: boolean;
// }

// const initialState: RegisterState = {
//   success: false,
//   error: false
// };

// const registerSlice = createSlice({
//   name: 'register',
//   initialState,
//   reducers: {},
//   extraReducers: {
//     [registerApi.endpoints.registerFinder.matchFulfilled.toString()]: state => {
//       state.success = true;
//       state.error = false;
//     },
//     [registerApi.endpoints.registerLister.matchRejected.toString()]: state => {
//       state.success = false;
//       state.error = true;
//     }
//   }
// });

// export default registerSlice.reducer;
