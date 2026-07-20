import dynamic from "next/dynamic";
import Link from "next/link";

const CodebaseFlow = dynamic(() => import("../components/CodebaseFlow"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="container mx-auto p-6">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-semibold">
          ContextLens — Codebase Understanding
        </h1>
        <div>
          <Link href="/">Home</Link>
        </div>
      </header>

      <section className="mb-8">
        <p className="text-slate-600">
          A modernized Next.js + TypeScript + Tailwind + React Flow demo of the
          original static site.
        </p>
      </section>

      <section className="h-[600px] border rounded-md overflow-hidden">
        <CodebaseFlow />
      </section>
    </main>
  );
}
