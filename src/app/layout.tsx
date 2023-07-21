import "./global.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { raleway } from "@/app/styles/fonts";
import { DesktopNavigation } from "@/app/components/MainNavigation/DesktopNavigation/DesktopNavigation";
import { MobileNavigation } from "@/app/components/MainNavigation/MobileNavigation/MobileNavigation";
import { styled } from "../../_styled-system/jsx";

export const metadata: Metadata = {
  title: "RecipeMe",
  description: "Deine rasante Rezeptsammlung",
};

const Body = styled("body", {
  base: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
});

/**
 * A layout is UI that is shared between routes. This one is the root layout.
 * A root layout is the top-most layout in the root app directory.
 * It is used to define the <html> and <body> tags and other globally shared UI.
 * https://nextjs.org/docs/app/api-reference/file-conventions/layout
 *
 * @param children will be populated with the route segments the layout is wrapping: e.g. Page Content
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="de">
      {/* make fonts available via next/font */}
      <Body className={`${raleway.className}`}>
        <DesktopNavigation />
        {children}
        <MobileNavigation />
      </Body>
    </html>
  );
}
