import { createContext, useReducer } from "react";

// Create Context
export const PostList = createContext({
  postlist: [],
  addPost: () => {},
  deletePost: () => {},
});

// Reducer
const postlistReducer = (currPostlist, action) => {
  if (action.type === "ADD_POST") {
    const newPostlist = [...currPostlist];
    newPostlist.unshift(action.payload);
    return newPostlist;
  }
  if (action.type === "DELETE_POST") {
    const newPostlist = currPostlist.filter(
      (post) => post.id !== action.payload.id,
    );
    return newPostlist;
  }
  return currPostlist;
};

// Provider Component
const PostListProvider = ({ children }) => {
  const [postlist, dispatchPostlist] = useReducer(
    postlistReducer,
    DEFAULT_POST_LIST,
  );

  const addPost = (userId, title, body, reactions, tags) => {
    dispatchPostlist({
      type: "ADD_POST",
      payload: {
        id: `post-${Date.now()}`,
        userId: userId,
        title: title,
        body: body,
        reactions: reactions,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostlist({ type: "DELETE_POST", payload: { id: postId } });
  };

  return (
    <PostList.Provider
      value={{
        postlist,
        addPost,
        deletePost,
      }}>
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "GOTO COLLEGE",
    body: "Education is the key to success",
    reactions: 1,
    userId: "user-5",
    tags: ["education", "college"],
  },
  {
    id: "2",
    title: "PASS HO JA BHAI ",
    body: "If you want to pass, you have to study",
    reactions: 15,
    userId: "user-6",
    tags: ["education", "pass", "study"],
  },
];

export default PostListProvider;
