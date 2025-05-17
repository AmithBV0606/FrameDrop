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
        <div className="flex flex-col h-full">
          <Navbar />
          <main className="flex flex-1">
            <div className="grow-[25vw]">
              <MainDrawer />
            </div>
            <div className="grow-[75vw] w-full">{children}</div>
          </main>
        </div>
      </body>
    </html>
  );
}
