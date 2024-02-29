import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  isLoading: false,
  error: "",
};

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {
    fetchUsersRequest: (state) => {
      return { ...state, isLoading: true };
    },
    fetchUsersSuccess: (state,action) => {
      return { ...state, isLoading: false, users: action.payload };
    },
    fetchUsersFailure: (state,action) => {
      return { ...state, isLoading: false, error: action.payload };
    },
  },
});

export default apiSlice.reducer;

export const { fetchUsersRequest, fetchUsersSuccess, fetchUsersFailure } =
apiSlice.actions;
