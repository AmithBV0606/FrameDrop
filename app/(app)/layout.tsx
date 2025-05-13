import MainDrawer from "@/components/MainDrawer";
import Navbar from "@/components/Navbar";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {/* {children} */}

        <main className="flex">
          {/* Drawer for large screen : */}
          <div className="grow-[25vw]">
            <MainDrawer />
          </div>

          {/* Children */}
          <div className="grow-[75vw] w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}