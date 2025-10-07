import { createSlice } from "@reduxjs/toolkit";
import type { TUser } from "../../../types/user.type";
import { googleLogOut } from "./firebase/authService";

type TAuthInitialState = {
  user: TUser | null;
  token: string | null;
  image: string | null;
  googleUId: string | null;
};

const initialState: TAuthInitialState = {
  user: null,
  token: null,
  image: null,
  googleUId: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, actions) => {
      const { user, token, uid } = actions.payload;
      state.user = user;
      state.token = token;
      state.googleUId = uid;
    },
    logOut: (state) => {
      if (state.googleUId) {
        googleLogOut();
      }
      state.user = null;
      state.token = null;
      state.googleUId = null;
    },
  },
});

export const { setUser, logOut } = authSlice.actions;

export default authSlice.reducer;
