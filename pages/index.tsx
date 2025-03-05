export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
    >
      <main className="container mx-auto px-4 py-16 flex-grow flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Start Prompting
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-neutral-700 dark:text-neutral-300">
          Use the AI assistant to build your next application
        </p>
        
        <div className="max-w-2xl mb-12 text-left">
          <h2 className="text-2xl font-semibold mb-4">Modern Tech Stack</h2>
          <p className="text-neutral-700 dark:text-neutral-300 mb-6">
            Built with the latest web technologies including Next.js 14 for server-side rendering and routing, 
            Tailwind CSS for utility-first styling, and Shadcn UI for beautiful, accessible components.
          </p>
        </div>

        <div className="flex gap-4 flex-col sm:flex-row justify-center">
          <a
            className="rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors px-6 py-3 font-semibold text-sm inline-block"
            href="/start"
          >
            Get Started
          </a>
          <a
            className="rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors px-6 py-3 font-semibold text-sm inline-block"
            href="/docs"
          >
            View Documentation
          </a>
        </div>
      </main>
      
      <footer className="bg-neutral-50 dark:bg-neutral-800 py-6">
        <div className="container mx-auto px-4 text-center">
          <a
            className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
            href="https://www.frontend.co"
            target="_blank"
          >
            Built with Frontend
          </a>
        </div>
      </footer>
    </div>
  );
}