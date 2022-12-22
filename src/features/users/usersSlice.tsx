import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface UserState {
  id: string;
  name: string;
}

const initialState: UserState[] = [
  { id: "1", name: "Hoang Huy" },
  { id: "2", name: "Nguyen Anh Thu" },
];

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state: RootState) => state.users;

export default usersSlice.reducer;
