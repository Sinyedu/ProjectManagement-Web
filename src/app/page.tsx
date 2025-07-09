import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 p-8">
      <header className="mb-12 text-center">
        <Image
          src="/logo.svg"
          alt="ProjectManage logo"
          width={64}
          height={64}
          className="mx-auto mb-4 dark:invert"
        />
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white">
          Welcome to Project Management
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-xl mx-auto">
          Organize your work, collaborate with your team, and track your
          projects efficiently.
        </p>
      </header>

      <main>
        <Link href="/login" className="block mb-6">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
            Login
          </button>
        </Link>
      </main>

      <footer className="mt-20 text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} ProjectManage. All rights reserved.
      </footer>
    </div>
  );
}
