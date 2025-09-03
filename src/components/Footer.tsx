export default function Footer() {
  return (
    <footer className="bg-bg border-t-[.1rem] border-gray-600 text-gray-300 py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Left */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Ishaq Abdullahi. All rights reserved.</p>

        {/* Right */}
        <div className="flex gap-6">
          <a
            href="https://github.com/ishaaaq"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in//ishaq-abdullahi-137923309"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ishaqabdullahi670@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
