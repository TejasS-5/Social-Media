import { useContext, useRef } from "react";
import { PostList } from "../store/Post-list-store";

const Createpost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handlesubmit = (event) => {
    event.preventDefault();

    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, title, body, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handlesubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User ID
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userIdElement"
          placeholder="Enter user ID"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          ref={titleElement}
          className="form-control"
          id="titleElement"
          placeholder="How are you filling today!!!!"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          rows="5"
          type="text"
          ref={bodyElement}
          className="form-control"
          id="bodyElement"
          placeholder="Tell us more about it..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of Reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reactionsElement"
          placeholder="How many people reacted to this post?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hastag here
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tagsElement"
          placeholder="Please enter Hashtags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default Createpost;
