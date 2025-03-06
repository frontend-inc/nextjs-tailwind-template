export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white"
    >
      <main className="container mx-auto px-4 py-16 flex-grow flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text">
          Start Prompting
        </h1>
        <p className="text-xl sm:text-2xl mb-8 text-neutral-700 dark:text-neutral-300">
          Use the AI assistant to build your next idea
        </p>
                
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
