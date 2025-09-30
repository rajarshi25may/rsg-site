import Image from "next/image";
import { getAllPosts, getPost } from "@/lib/posts";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  // prebuild all posts
  return getAllPosts().map(p => ({ slug: p.slug }));
}

export default function PostPage({ params }: Props) {
  const { meta, html } = getPost(params.slug);

  return (
    <main className="max-w-3xl mx-auto p-6 prose">
      <h1>{meta.title}</h1>
      <p><em>{meta.date}</em></p>
      {meta.cover && (
        <Image src={meta.cover} alt={meta.title} width={1000} height={520} style={{height:"auto", width:"100%"}} />
      )}
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
