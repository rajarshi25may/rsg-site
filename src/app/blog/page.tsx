import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/posts";

export const metadata = { title: "Blog" };

export default function BlogPage() {
  const posts = getAllPosts(); // server component can use fs

  return (
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <ul className="space-y-6">
        {posts.map(p => (
          <li key={p.slug} className="border rounded-lg p-4">
            {p.cover && (
              <div className="mb-3">
                <Image src={p.cover} alt={p.title} width={800} height={420} style={{height:"auto", width:"100%"}} />
              </div>
            )}
            <h2 className="text-xl font-semibold">
              <Link href={`/blog/${p.slug}`}>{p.title}</Link>
            </h2>
            <p className="text-sm text-gray-500">{p.date}</p>
            {p.excerpt && <p className="mt-2">{p.excerpt}</p>}
            <Link className="text-blue-600" href={`/blog/${p.slug}`}>Read more →</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

