import "@/styles/globals.css";

export const metadata = {
  title: "Frontend | AI website builder",
  description: "The fastest way to build apps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>      
      <body className='w-screen h-full' suppressHydrationWarning>
        {children}      
      </body>
    </html>
  );
}
