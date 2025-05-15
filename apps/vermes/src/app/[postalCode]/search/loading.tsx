export default function SearchLoading() {
  return (
    <main className="mt-32 bg-background pb-16 md:mt-48">
      {/* Category Header Skeleton */}
      <div className="px-4 md:px-8">
        <div className="mb-2 h-10 w-48 animate-pulse rounded bg-muted-foreground/10" />
        <div className="mb-8 h-4 w-24 animate-pulse rounded bg-muted-foreground/10" />
      </div>

      {/* Main Content Skeleton */}
      <div className="px-4 md:px-8">
        <div className="flex flex-col md:flex-row">
          {/* Product Grid Skeleton */}
          <div className="w-full">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Generate 6 product skeletons */}
              {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="group block transition-opacity hover:opacity-90"
                >
                  <div className="aspect-square overflow-hidden">
                    <div className="relative h-full w-full animate-pulse bg-muted-foreground/10" />
                  </div>
                  <div className="mt-4">
                    <div className="h-5 w-3/4 animate-pulse rounded bg-muted-foreground/10" />
                    <div className="mt-1 h-4 w-1/4 animate-pulse rounded bg-muted-foreground/10" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
