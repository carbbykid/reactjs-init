import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../../features/posts/postsSlice";
import { selectAllUsers } from "../../features/users/usersSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [userId, setUserId] = useState<string>("");

  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);

  const canSave = title && content && userId;

  const submitPost = (e: any) => {
    e.preventDefault();
    if (title && content) {
      dispatch(addPost(title, content, userId));
      setTitle("");
      setContent("");
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form action="">
        <label htmlFor="user" style={{ display: "block" }}>
          User
        </label>
        <select
          style={{
            display: "block",
            margin: "10px 0",
            padding: "10px 10px",
            fontWeight: "bold",
          }}
          name="user"
          id="user"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value=""></option>
          {users.map((user) => (
            <option key={user.id} id={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
        <label style={{ display: "block" }} htmlFor="title">
          Post Title
        </label>
        <input
          style={{
            display: "block",
            width: "100%",
            margin: "10px 0",
            padding: "10px 10px",
            fontWeight: "bold",
          }}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          id="title"
        />
        <label style={{ display: "block" }} htmlFor="content">
          Post Content
        </label>
        <textarea
          style={{
            display: "block",
            width: "100%",
            margin: "10px 0",
            padding: "10px 10px",
          }}
          name="content"
          id="content"
          cols={30}
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        >
          Please enter content for a post
        </textarea>
        <input
          style={{
            width: "100%",
            margin: "10px 0",
            padding: "10px 10px",
            fontWeight: "bold",
            fontSize: "24px",
            cursor: "pointer",
          }}
          type="submit"
          onClick={submitPost}
          value="Submit"
          disabled={!canSave}
        />
      </form>
    </section>
  );
};

export default AddPostForm;
