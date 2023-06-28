import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    { id: "0", name: "Ahsan Lebowski" },
    { id: "1", name: "Wahab Zahid" },
    { id: "2", name: "Huzaifa Bilal" },
];
const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default userSlice.reducer;
