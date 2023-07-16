import "./global.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { MainNavigation } from "@/app/components/MainNavigation/MainNavigation";

export const metadata: Metadata = {
  title: "RecipeMe",
  description: "Deine rasante Rezeptsammlung",
};

// todo doesnt work
const raleway = Raleway({
  subsets: ["latin"],
  fallback: ["Roboto", "sans-serif"],
});

/**
 * A layout is UI that is shared between routes. This one is the root layout.
 * A root layout is the top-most layout in the root app directory.
 * It is used to define the <html> and <body> tags and other globally shared UI.
 * https://nextjs.org/docs/app/api-reference/file-conventions/layout
 *
 * @param children will be populated with the route segments the layout is wrapping: e.g. Page Content
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={raleway.className}>
        <MainNavigation />
        {children}
      </body>
    </html>
  );
}
