import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoginState {
  token: string | null;
  userInfo: {
    userId: number | null;
    role: string | null;
    name:string|null;
    email:string|null;
  } | null;
}

const initialState: LoginState = {
  token: localStorage.getItem('token'),
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo')!)
    : null
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ token: string; userId: number; role: string; name:string; email:string }>
    ) => {
      state.token = action.payload.token;
      state.userInfo = {
        userId: action.payload.userId,
        role: action.payload.role,
        name:action.payload.name,
        email:action.payload.email
      };
      localStorage.setItem('userInfo', JSON.stringify(state.userInfo));
      localStorage.setItem('token', state.token);
    }
  }
});

export const { setCredentials } = loginSlice.actions;

export default loginSlice.reducer;
