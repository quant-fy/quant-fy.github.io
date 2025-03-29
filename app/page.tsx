"use client";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gradient-to-br from-gray-100 to-gray-200">
      
      <main className="flex flex-col gap-3 row-start-2 items-center justify-center max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 w-full">
          <p>Quantfy website is coming soon...</p>
        </div>
      </main>

      <footer className="row-start-3 flex gap-2 flex-wrap items-center justify-center text-gray-600">
        <p>&copy; 2025 Quantfy, automated quantitative investment made easy for you. All rights reserved.</p>
      </footer>

    </div>
  );
}