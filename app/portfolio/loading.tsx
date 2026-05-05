import { Container } from "@/components/ui/Container";

export default function Loading() {
  return (
    <div className="bg-background min-h-screen pt-12 pb-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="h-4 w-24 bg-secondary/50 animate-pulse mx-auto mb-4" />
          <div className="h-12 w-64 bg-secondary/50 animate-pulse mx-auto mb-6" />
          <div className="h-6 w-full bg-secondary/50 animate-pulse mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="aspect-[3/2] bg-secondary/30 animate-pulse rounded-sm" />
          ))}
        </div>
      </Container>
    </div>
  );
}
