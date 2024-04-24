import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
// investment platform
export const metadata = {
  title: "Kamao",
  description:
    "Kamao is a platform for investing in micro-businesses and startups.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${inter.variable} bg-gray-100`}>
          <Navbar />
          <main className="pt-32 min-h-screen">{children}</main>

          <footer className="bg-blue-900 text-white text-center py-4">
            <p>&copy; 2024 Kamao. All rights reserved.</p>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
