"use client"; // Error components must be Client components

import { Typography } from "@/components/base/Typography";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="bg-slate-200 container mx-auto min-h-screen">
      <Typography level="h2" styling="h2">
        Something went wrong!
      </Typography>
      <Button variant="destructive" onClick={() => reset()}>
        Try again
      </Button>
      <p className="text-xl">
        Or go back to{" "}
        <Link href="/" className="underline">
          Home 🏠
        </Link>
      </p>
    </main>
  );
}
