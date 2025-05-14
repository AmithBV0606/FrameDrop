import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Bounce, ToastContainer } from "react-toastify";
import { dark } from "@clerk/themes";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FrameDrop",
  description: "An image resizer and video compressor!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{ baseTheme: dark }} telemetry={false}>
      <html lang="en">
        <body
          // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          className={`${roboto.className}antialiased`}
        >
          {children}
          <ToastContainer
            position="bottom-right"
            autoClose={8000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
          />
        </body>
      </html>
    </ClerkProvider>
  );
}