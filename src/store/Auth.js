import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isLoggedin: false,
  token: "",
  email: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    updateAuthInfo(state, action) {
      const token = action.payload.token;
      const email = action.payload.email;
      localStorage.setItem("exp_token", token);
      localStorage.setItem("exp_email", email);
      state.isLoggedin = true;
      state.token = token;
      state.email = email;
    },
    logout(state) {
        localStorage.removeItem('exp_token');
        localStorage.removeItem('exp_email');
        state.token = '';
        state.email = '';
        state.isLoggedin = false;
    }
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;