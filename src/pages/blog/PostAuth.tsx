import { useSelector } from "react-redux";
import { selectAllUsers } from "../../features/users/usersSlice";

const PostAuth = ({ userId }: { userId?: string }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === userId);
  return <span>{author ? author.name : "Unknow author"}</span>;
};

export default PostAuth;
