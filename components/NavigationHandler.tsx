"use client";

import { useNavigation } from "@/context/NavigationContext";
import Spinner from "@/components/Spinner";

export default function NavigationHandler({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { isNavigating } = useNavigation(); // Get the navigation state

  return (
    <>
      {isNavigating && (
        <div className="fixed inset-0 flex items-center justify-center bg-white/70 z-50">
          <Spinner />
        </div>
      )}
      {children}
    </>
  );
}
