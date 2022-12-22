import { useDispatch } from "react-redux";
import { reactionAdded } from "../../features/posts/postsSlice";

const reactionEmoji = {
  thumbsUp: "👍",
  wow: "😮",
  heart: "❤",
  rocket: "🚀",
  coffee: "☕",
};

const PostReaction = ({ post }: { post: any }) => {
  const dispatch = useDispatch();
  return (
    <div>
      {Object.entries(reactionEmoji).map(([name, emoji]) => (
        <button
          key={name}
          type="button"
          onClick={(e) =>
            dispatch(reactionAdded({ postId: post.id, reaction: name }))
          }
        >
          {emoji} {post.reactions[name]}
        </button>
      ))}
    </div>
  );
};

export default PostReaction;
