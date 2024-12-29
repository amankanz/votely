import {
  IBM_Plex_Mono,
  IBM_Plex_Sans,
  Poppins,
  Nunito,
  DM_Sans,
} from "next/font/google";

export const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400"],
});
export const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
});
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400"],
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400"],
});
