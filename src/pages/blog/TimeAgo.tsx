import { formatDistanceToNow } from "date-fns";

const TimeAgo = ({ createAt }: { createAt: string }) => {
  const timeAgo = formatDistanceToNow(new Date(createAt));
  return (
    <span title={createAt}>
      <i>{timeAgo} ago</i>
    </span>
  );
};

export default TimeAgo;
