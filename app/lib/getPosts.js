import fs from "fs";
import matter from "gray-matter";
import path from "path";

export function getPosts() {
  const directory = "posts";
  const files = fs.readdirSync(directory);

  return files.map((file) => {
    const content = fs.readFileSync(path.join(directory, file), "utf8");
    const { data } = matter(content);

    return {
      title: data.title,
      excerpt: data.excerpt,
      slug: file.replace(".mdx", ""),
    };
  });
}
