import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white`}
    >
      <main className="container mx-auto px-4 py-16 flex-grow flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Next.js Starter
        </h1>
        
        <ol className="list-inside list-decimal text-sm sm:text-base text-neutral-700 dark:text-neutral-300 mb-8 max-w-md">
          <li className="mb-4">
            Get started by editing{" "}
            <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-1 rounded font-mono font-semibold">
              pages/index.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 flex-col sm:flex-row justify-center">
          <a
            className="rounded-full bg-neutral-900 text-white dark:bg-white dark:text-black hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors px-6 py-3 font-semibold text-sm inline-block"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy now
          </a>
          <a
            className="rounded-full border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors px-6 py-3 font-semibold text-sm inline-block"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      
      <footer className="bg-neutral-50 dark:bg-neutral-800 py-6">
        <div className="container mx-auto px-4 flex flex-wrap gap-4 justify-center">
          <a
            className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn
          </a>
          <a
            className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Examples
          </a>
          <a
            className="text-sm text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Go to nextjs.org →
          </a>
        </div>
      </footer>
    </div>
  );
}