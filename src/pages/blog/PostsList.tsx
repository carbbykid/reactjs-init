import { useSelector } from "react-redux";
import { PostState, selectAllPosts } from "../../features/posts/postsSlice";
import PostAuth from "./PostAuth";
import PostReaction from "./PostReaction";
import TimeAgo from "./TimeAgo";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const orderedPosts = posts.slice().sort((a: PostState, b: PostState) => {
    console.log(a.createAt);
    console.log(b.createAt);
    console.log(b.createAt.localeCompare(a.createAt));
    return b.createAt.localeCompare(a.createAt);
  });

  return (
    <section>
      {orderedPosts.map((post) => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <p className="post-credit">
            <PostAuth userId={post.userId} />
          </p>
          <TimeAgo createAt={post.createAt} />
          <PostReaction post={post} />
        </article>
      ))}
    </section>
  );
};

export default PostsList;

// Dọc docs sơ qua, tìm youtuber nghiên cứu về nó xem tutorial rồi làm theo đụng đâu đọc đó là chinh phục được..học thông minh học nhanh...không lang mang
// Đặt từng mục tiêu một, đi từng bước một, kiên trì không hấp tấp để rồi chán nãn bỏ cuộc lang mang, phải tĩnh táo theo đuổi và nuôi dưỡng mục tiêu
// Tạo thói quen tự học,không gian tự học hiệu quả, lênh kế hoạch, mục tiêu trong 10p tính thời gian này vào thời gian làm một việc gì đó luôn, nhạc trong thời gian học, loại bỏ mạng xh
// Thói quen, cực khổ kiếm tiền, kiên trí, chăm chỉ.
// Đi làm cty block-chain- tự tìm phòng ra ngoài ở riêng, cuộc sống phải có xh mới có động lực phát triển được.
