import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const postsDir = path.join(process.cwd(), "src/content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  cover?: string;
};

export function getAllPosts(): PostMeta[] {
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith(".md"));
  const posts = files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(postsDir, file), "utf8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      excerpt: data.excerpt ?? "",
      cover: data.cover ?? "",
    } as PostMeta;
  });
  // newest first
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string) {
  const raw = fs.readFileSync(path.join(postsDir, `${slug}.md`), "utf8");
  const { data, content } = matter(raw);
  const html = marked.parse(content);
  return {
    meta: {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      excerpt: data.excerpt ?? "",
      cover: data.cover ?? "",
    } as PostMeta,
    html,
  };
}
