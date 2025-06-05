export default function Footer() {
  return (
    <footer className="bg-black/80 text-white py-4 border-t border-red-800 shadow-[0_0_10px_rgba(255,0,51,0.3)] relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="text-sm">
            © {new Date().getFullYear()} KLIRK <span className="text-red-500">|</span> <span className="neon-red-text">Portfolio</span>
          </div>
        </div>
      </div>
    </footer>
  );
} 