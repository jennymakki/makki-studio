export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10 flex justify-between text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Makki Studio</p>
      </div>
    </footer>
  );
}