import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Routes that are public :
const isPublicRoute = createRouteMatcher(["/", "/sign-in", "/sign-up"]);

// Customized logic for preventing and allowing the authenticated and unauthenticated users :
export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  const currentUrl = new URL(req.url);

  // To check if the user is trying to access the home/dashboard page
  const isAccessingDashboard = currentUrl.pathname === "/home";

  // To check if the user is trying to access any api route
  const isApiRequest = currentUrl.pathname.startsWith("/api");

  // If the user is logged in and is trying to access the public routes such as "sign-in", "sign-up" or "/".
  if (userId && isPublicRoute(req) && !isAccessingDashboard) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  // If the user is not logged.
  if (!userId) {
    // If the user is not logged in and he is trying to access the private/protected routes.
    if (!isPublicRoute(req)) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    // If the user is not logged in and he is trying to access the API routes which are not public.
    if (isApiRequest) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};