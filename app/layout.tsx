import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "My Professional Blog",
  description: "A clean and modern Next.js blog theme",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-800">
        <Navbar />
        <main className="max-w-3xl mx-auto px-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
