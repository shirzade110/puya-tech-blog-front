import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-5xl mx-auto px-4">
        
        <div className="grid md:grid-cols-3 gap-10">
          
          {/* Column 1 */}
          <div>
            <h3 className="text-lg font-semibold mb-3">MyBlog</h3>
            <p className="text-gray-400">
              A clean and modern blog built with Next.js & TailwindCSS.
            </p>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Follow Me</h3>
            <ul className="space-y-2">
              <li><Link href="https://twitter.com">Twitter</Link></li>
              <li><Link href="https://github.com">GitHub</Link></li>
              <li><Link href="https://linkedin.com">LinkedIn</Link></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
          © {new Date().getFullYear()} MyBlog. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
