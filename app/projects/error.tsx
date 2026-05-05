"use client";

import { useEffect } from "react";
import { Container } from "@/components/ui/Container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="bg-background min-h-[70vh] flex items-center justify-center">
      <Container className="text-center">
        <h2 className="text-3xl font-heading font-bold mb-4">Something went wrong!</h2>
        <p className="text-muted mb-8">We couldn't load the projects at this time.</p>
        <button
          onClick={() => reset()}
          className="bg-primary text-white px-6 py-3 uppercase tracking-wide text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          Try again
        </button>
      </Container>
    </div>
  );
}
