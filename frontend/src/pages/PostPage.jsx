import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../lib/axios";
import Sidebar from "../components/Sidebar";
import Post from "../components/Post";

const PostPage = () => {
  const { postId } = useParams();

  // Fetch the authenticated user data
  const { data: authUser } = useQuery({
    queryKey: ["authUser"],
    queryFn: () => axiosInstance.get("/auth/user").then((res) => res.data), // Ensure the response data is handled
  });

  // Fetch the post data
  const {
    data: post,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["post", postId],
    queryFn: () =>
      axiosInstance.get(`/posts/${postId}`).then((res) => res.data), // Ensure the response data is handled
    enabled: !!postId, // Only fetch if postId is defined
  });

  if (isLoading) return <div>Loading post...</div>;
  if (isError) return <div>Error fetching post. Please try again.</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Sidebar Section */}
      <div className="hidden lg:block lg:col-span-1">
        <Sidebar user={authUser} />
      </div>

      {/* Post Section */}
      <div className="col-span-1 lg:col-span-3">
        <Post post={post} />
      </div>
    </div>
  );
};

export default PostPage;
