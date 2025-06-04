export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-2 w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="text-sm">© {new Date().getFullYear()} My Website</div>
        </div>
      </div>
    </footer>
  );
} 