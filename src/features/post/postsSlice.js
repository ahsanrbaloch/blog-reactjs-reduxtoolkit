import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: "1",
        title: "Learning Redux Toolkit",
        content: "i've heard good things",
    },
    {
        id: "2",
        title: "Slices...",
        content: "The more I say slice the more I want Pizza",
    },
];

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                    },
                };
            },
        },
    },
});

export const selectAllPosts = (state) => state.posts;
export default postsSlice.reducer;
export const { postAdded } = postsSlice.actions;
