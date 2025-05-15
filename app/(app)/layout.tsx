import MainDrawer from "@/components/MainDrawer";
import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Navbar />

        <main className="flex">
          {/* Drawer for large screen : */}
          <div className="grow-[25vw]">
            <MainDrawer />
          </div>

          <div className="grow-[75vw] w-full">{children}</div>
        </main>
      </body>
    </html>
  );
}