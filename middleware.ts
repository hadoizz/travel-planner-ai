import { authMiddleware } from "@clerk/nextjs";

// Use Clerk's authMiddleware without the publicRoutes configuration
export default authMiddleware();

// Configure the matcher to allow Google to crawl your pages and exclude static files
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"], // Allow Google to crawl homepage and necessary routes
};
