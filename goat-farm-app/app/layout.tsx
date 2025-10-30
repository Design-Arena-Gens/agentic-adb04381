import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Goat Farm Management System | Dharmendra Kumar",
  description: "Commercial Goat Farm Management System - Sitamarhi, Bihar, India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-gray-50">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-6 mt-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p>&copy; 2024 Commercial Goat Farm - Dharmendra Kumar, Sitamarhi, Bihar</p>
            <p className="text-sm text-gray-400 mt-1">Professional Goat Farm Management System</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
