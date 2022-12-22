import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { RootState } from "../../app/store";

export interface PostState {
  id: string;
  title: string;
  content: string;
  userId?: string;
  createAt: string;
  reactions: Reactions;
}

export interface Reactions {
  thumbsUp: number;
  wow: number;
  heart: number;
  rocket: number;
  coffee: number;
}

const initialState: PostState[] = [
  {
    id: "1",
    title: "Heart in Hand 2020",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda nostrum illo animi. Sequi minima, voluptas facilis ad perferendis maiores, sapiente soluta neque quam similique aspernatur, aperiam dolorem accusantium voluptatum consequuntur.",
    createAt: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0 },
  },
  {
    id: "2",
    title: "Heart in Hand 2021",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda nostrum illo animi. Sequi minima, voluptas facilis ad perferendis maiores, sapiente soluta neque quam similique aspernatur, aperiam dolorem accusantium voluptatum consequuntur.",
    createAt: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0 },
  },
];

export const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    addPost: {
      reducer(state, action: PayloadAction<PostState>) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            createAt: new Date().toISOString(),
            reactions: { thumbsUp: 0, wow: 0, heart: 0, rocket: 0, coffee: 0 },
          },
        };
      },
    },

    reactionAdded: (state, action) => {
      const { postId, reaction } = action.payload;
      const existingPost: any = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPosts = (state: RootState) => state.posts;
export const { addPost, reactionAdded } = postsSlice.actions;
export default postsSlice.reducer;
