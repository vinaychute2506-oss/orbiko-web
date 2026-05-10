"use client";

import { Container } from "@/components/ui/Container";
import { useEffect } from "react";

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
    <div className="bg-background min-h-screen flex items-center justify-center text-center px-6">
      <Container>
        <h2 className="text-3xl font-heading font-bold mb-4">Something went wrong!</h2>
        <p className="text-muted mb-8">We encountered an error while loading the portfolio.</p>
        <button
          onClick={() => reset()}
          className="bg-accent text-foreground px-8 py-3 uppercase tracking-widest text-xs font-medium hover:bg-accent/80 transition-colors"
        >
          Try again
        </button>
      </Container>
    </div>
  );
}
