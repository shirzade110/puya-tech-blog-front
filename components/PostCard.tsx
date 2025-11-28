import Link from "next/link";

export default function PostCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="p-6 rounded-xl bg-white shadow hover:shadow-lg transition">
        <h2 className="text-2xl font-bold">{post.title}</h2>
        <p className="text-gray-600 mt-2">{post.excerpt}</p>
      </div>
    </Link>
  );
}
