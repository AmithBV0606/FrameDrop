import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        {/* Special Navbar for Auth pages :  */}
        <header className="relative z-10 bg-gradient-to-r from-green-700/10 to-black">
          <div className="container ml-0 sm:ml-12 py-6 px-4">
            <nav className="flex justify-between items-center">
              {/* Logo and SAAS Name : */}
              <div className="flex items-center gap-3">
                {/* Logo : */}
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500 blur-sm rounded-md"></div>

                  <div className="relative bg-gradient-to-br from-green-400 to-green-600 p-2 rounded-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-black"
                    >
                      <path d="M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
                      <path d="m12 12 4 10 1.7-4.3L22 16Z" />
                    </svg>
                  </div>
                </div>

                {/* SAAS Name : */}
                <span className="text-2xl font-extrabold tracking-tight">
                  FrameDrop
                </span>
              </div>
            </nav>
          </div>
        </header>

        {children}
      </body>
    </html>
  );
}