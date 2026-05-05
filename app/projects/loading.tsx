import { Container } from "@/components/ui/Container";

export default function ProjectsLoading() {
  return (
    <div className="bg-background min-h-screen pt-12 pb-24">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16 animate-pulse">
          <div className="h-4 w-32 bg-secondary mx-auto mb-4 rounded"></div>
          <div className="h-14 w-64 bg-secondary mx-auto mb-6 rounded"></div>
          <div className="h-6 w-96 bg-secondary mx-auto rounded"></div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="break-inside-avoid animate-pulse">
              <div className="aspect-[4/5] bg-secondary w-full rounded"></div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
