import "./globals.css";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import AuthContext from "@/context/AuthContext";
import SWRConfigContext from "@/context/SWRConfigContext";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.className}>
      <body className="w-full max-w-screen-xl overflow-auto mx-auto">
        <AuthContext>
          <header className="sticky top-0 bg-white z-10 border-b">
            <Navbar />
          </header>
          <main className="px-60 bg-neutral-50 min-h-screen">
            <SWRConfigContext>{children}</SWRConfigContext>
          </main>
        </AuthContext>
        <div id="portal" />
      </body>
    </html>
  );
}
