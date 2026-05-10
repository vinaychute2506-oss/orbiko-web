"use client";

import { Container } from "@/components/ui/Container";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <div className="bg-background min-h-screen flex items-center justify-center text-center px-6">
      <Container>
        <h2 className="text-3xl font-heading font-bold mb-4">Service loading failed</h2>
        <p className="text-muted mb-8">We could not retrieve our service list at this time.</p>
        <button
          onClick={() => reset()}
          className="bg-accent text-foreground px-8 py-3 uppercase tracking-widest text-xs font-medium hover:bg-accent/80 transition-colors"
        >
          Retry
        </button>
      </Container>
    </div>
  );
}
