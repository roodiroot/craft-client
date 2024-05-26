import localFont from "next/font/local";
import { Raleway } from "next/font/google";
// Font files can be colocated inside of `app`
export const unbounded = localFont({
  src: [
    {
      path: "fonts/Unbounded-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "fonts/Unbounded-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "fonts/Unbounded-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "fonts/Unbounded-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-unbounded",
  display: "swap",
});

export const raleway = Raleway({
  weight: ["400", "500", "600", "700"],
  subsets: ["cyrillic"],
  display: "swap",
  variable: "--font-raleway",
});
