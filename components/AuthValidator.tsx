// "use client";

// import { useEffect } from "react";
// import { useRouter, usePathname } from "next/navigation";

// export default function AuthValidator({
//   children,
// }: Readonly<{ children: React.ReactNode }>) {
//   const router = useRouter();
//   const pathname = usePathname();

//   useEffect(() => {
//     const validateToken = async () => {
//       const token = document.cookie
//         .split("; ")
//         .find((row) => row.startsWith("token="))
//         ?.split("=")[1];

//       if (!token && pathname === "/business-dashboard") {
//         router.push("/login");
//         return;
//       }

//       try {
//         const response = await fetch("/api/auth/verify-token", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ token }),
//         });

//         if (!response.ok) {
//           router.push("/login");
//         }
//       } catch (error) {
//         console.error("Token validation failed:", error);
//         router.push("/login");
//       }
//     };

//     validateToken();
//   }, [router, pathname]);

//   return <>{children}</>;
// }
