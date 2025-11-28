import { getPosts } from "../lib/getPosts";
import PostCard from "../../components/PostCard";

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>

      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
