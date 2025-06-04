import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black/80 border-b border-red-800 text-white py-4 shadow-[0_0_10px_rgba(255,0,51,0.5)] sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold neon-red-text">My Website</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-red-500 transition relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full group-hover:shadow-[0_0_5px_rgba(255,0,51,0.7)]"></span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 