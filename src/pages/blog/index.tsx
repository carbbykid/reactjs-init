import PostsList from "./PostsList";
import "./blog.css";
import AddPostForm from "./AddPostForm";

const Blog = () => {
  return (
    <div className="container">
      <h2 style={{ borderBottom: "2px solid white", paddingBottom: "20px" }}>
        Blog ChiPoPo
      </h2>
      <AddPostForm />
      <PostsList />
    </div>
  );
};

export default Blog;
