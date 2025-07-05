"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function ConditionalNavbar({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hideNavbar = pathname.startsWith("/landmark/");

  return (
    <>
      {!hideNavbar && <Navbar />}
      <main className="container py-10">{children}</main>
    </>
  );
}

