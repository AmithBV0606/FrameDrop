import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="relative h-[calc(100vh-90px)] w-[100vw] bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-scroll">
      {/* Geometric Background Elements */}
      <div className="fixed inset-0 z-0 opacity-50 w-full">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-green-500 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-1/3 -right-20 w-80 h-80 bg-green-700 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-green-600 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="relative h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-green-700/10 rounded-3xl blur-xl"></div>

        <SignUp
          appearance={{
            variables: {
              colorPrimary: "#22c55e", // DaisyUI's green-500
              colorBackground: "#000000",
              colorText: "#ffffff",
              colorInputBackground: "#1f2937", // gray-800
              colorInputText: "#ffffff",
              fontFamily: "Roboto",
            },
            elements: {
              cardBox: {
                // width: "500px",
              },
              card: {
                background: "#101419",
                borderBlock: "green",
                boxShadow: "revert",
                padding: "40px",
              },
              headerTitle: {
                color: "#17DE6D",
                fontSize: "30px",
                fontWeight: 900,
              },
              headerSubtitle: {
                color: "#fff",
                marginTop: "10px",
              },
              socialButtonsBlockButton: {
                color: "#fff",
                background: "#1E1C21",
                padding: "12px",
                "&:hover": {
                  background: "#333138",
                },
              },
              dividerLine: {
                background: "#494C6F",
                marginTop: "10px",
              },
              dividerText: {
                color: "#fff",
                marginTop: "10px",
              },
              formFieldLabel: {
                color: "#fff",
                marginBottom: "5px",
                marginTop: "10px",
              },
              formFieldInput: {
                background: "#080A0C",
                padding: "24px",
              },
              formButtonPrimary: {
                padding: "12px",
              },
              footerAction: {
                borderBottom: "0.5px solid #282A28",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
              footerActionText: {
                fontSize: "16px",
              },
              footerActionLink: {
                textDecoration: "underline",
                marginLeft: "5px",
                fontSize: "16px",
              },
            },
          }}
        />

        {/* <div className="absolute bottom-3 text-gray-400 text-md text-center">
          <p>© {new Date().getFullYear()} FrameDrop. All rights reserved.</p>
        </div> */}
      </div>
    </div>
  );
}