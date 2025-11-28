import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

export default async function PostPage({ params }) {
  const file = fs.readFileSync(
    path.join("posts", `${params.slug}.mdx`),
    "utf-8"
  );

  const { content, data } = matter(file);

  return (
    <article className="prose lg:prose-xl py-10">
      <h1>{data.title}</h1>
      <Markdown>{content}</Markdown>
    </article>
  );
}
