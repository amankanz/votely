// Helper function to check active route
export const isActive = (path: string, pathname: string) => pathname === path;

import { startTransition } from "react";

export const handleLinkClick = (
  href: string,
  router: ReturnType<typeof import("next/navigation").useRouter>, // Dynamic type inference
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
  setIsLoading(true);
  startTransition(() => {
    router.push(href);
    setIsLoading(false);
  });
};
