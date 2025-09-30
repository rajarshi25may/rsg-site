import Image from "next/image";
import photos from "@/content/photos.json";

type Photo = { src: string; w: number; h: number; alt?: string };

export default function Photos() {
  const items = photos as Photo[];

  return (
    <main className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Photos</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {items.map((p) => (
          <figure key={p.src} className="relative border rounded-lg overflow-hidden">
            <Image
              src={p.src}
              alt={p.alt || ""}
              width={p.w}
              height={p.h}
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 33vw"
              style={{ width: "100%", height: "auto" }}
            />
            {p.alt ? <figcaption className="p-2 text-xs text-slate-600">{p.alt}</figcaption> : null}
          </figure>
        ))}
      </div>
    </main>
  );
}
