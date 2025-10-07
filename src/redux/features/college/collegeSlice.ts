import { createSlice } from "@reduxjs/toolkit";

type TCollegeInitialState = {
  searchTerm: string;
};

const initialState: TCollegeInitialState = {
  searchTerm: "",
};

const collegeSlice = createSlice({
  name: "College",
  initialState,
  reducers: {
    setSearchTerm: (state, actions) => {
      state.searchTerm = actions.payload;
    },
  },
});

export const { setSearchTerm } = collegeSlice.actions;

export default collegeSlice.reducer;
