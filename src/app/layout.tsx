import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RecipeMe",
  description: "Deine rasante Rezeptsammlung",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
