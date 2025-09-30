export default function Home() {
  return (
    <main className="min-h-[80vh] flex items-center">
      <section className="max-w-4xl mx-auto px-6 py-10">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Rajarshi Dasgupta
          </h1>
          <p className="mt-3 text-slate-600 text-lg">
            AI • data • tax-tech. I build practical demos and write about how AI
            can be applied to public policy and enterprise problems.
          </p>
        </header>

        <nav className="grid gap-3 sm:grid-cols-2">
          <a
            href="/projects"
            className="rounded-xl border p-4 hover:bg-slate-50 transition"
          >
            <h2 className="font-semibold">Projects →</h2>
            <p className="text-sm text-slate-600 mt-1">
              Code, demos, and write-ups. Includes “run my code” links.
            </p>
          </a>

          <a
            href="/blog"
            className="rounded-xl border p-4 hover:bg-slate-50 transition"
          >
            <h2 className="font-semibold">Blog →</h2>
            <p className="text-sm text-slate-600 mt-1">
              Short essays on AI in tax and data systems.
            </p>
          </a>

          <a
            href="/photos"
            className="rounded-xl border p-4 hover:bg-slate-50 transition"
          >
            <h2 className="font-semibold">Photos →</h2>
            <p className="text-sm text-slate-600 mt-1">
              A lightweight gallery of selected shots.
            </p>
          </a>

          <a
            href="/about"
            className="rounded-xl border p-4 hover:bg-slate-50 transition"
          >
            <h2 className="font-semibold">About →</h2>
            <p className="text-sm text-slate-600 mt-1">
              Bio, contact, and links to profiles.
            </p>
          </a>
        </nav>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="mailto:hello@rajarshidasgupta.com"
            className="inline-flex items-center rounded-lg bg-black text-white px-4 py-2 hover:opacity-90"
          >
            Contact
          </a>
          <a
            href="https://github.com/rajarshi25may"
            target="_blank"
            className="text-slate-600 underline"
          >
            GitHub
          </a>
          <a
            href="https://huggingface.co/Rajarshi255"
            target="_blank"
            className="text-slate-600 underline"
          >
            Hugging Face
          </a>
          {/* Add LinkedIn/X links if you like */}
        </div>

        <p className="mt-10 text-xs text-slate-500">
          This site is built with Next.js, Tailwind, and deployed on Vercel.
        </p>
      </section>
    </main>
  );
}
