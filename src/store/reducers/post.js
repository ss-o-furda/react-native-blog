import { LOAD_POSTS } from "../types";

const initialState = {
  allPosts: [],
  bookedPosts: [],
};

const handlers = {
  [LOAD_POSTS]: (state, action) => ({
    ...state,
    allPosts: action.payload,
    bookedPosts: action.payload.filter((post) => post.booked),
  }),
  DEFAULT: (state) => state,
};

export const postReducer = (state = initialState, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT;
  return handler(state, action);
};
