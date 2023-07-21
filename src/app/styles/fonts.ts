import { Heebo, Raleway } from "next/font/google";

// https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#using-multiple-fonts

export const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
  variable: "--next-font-raleway",
});

export const heebo = Heebo({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
  variable: "--next-font-heebo",
});
