export default function Footer() {
  return (
    <footer id="footer" className="lg:hidden border-t border-black/20 mt-auto">
      <div className="px-6 py-12 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Connect Section */}
          <div className="mb-8">
            <h3 className="text-xs font-bold tracking-wider uppercase text-black/60 mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:bedisscottandrew@gmail.com"
                  className="text-sm text-black/70 hover:text-black transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/scott-bedis-19977a298/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-black/70 hover:text-black transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/scottandrew.bedis/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-black/70 hover:text-black transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 border-t border-black/10">
            <p className="text-xs text-black/50 text-center md:text-left">
              © {new Date().getFullYear()} Scott Andrew T. Bedis. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
