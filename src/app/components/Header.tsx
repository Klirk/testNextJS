import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold">My Website</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-blue-300 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/main" className="hover:text-blue-300 transition">
                Main
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 