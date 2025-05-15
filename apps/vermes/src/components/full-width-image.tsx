type FullWidthImageProps = {
  src: string;
  alt: string;
};

export default function FullWidthImage({ src, alt }: FullWidthImageProps) {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-[95%] ">
        <div className="aspect-[16/9] w-full overflow-hidden ">
          <img
            src={src || "/placeholder.svg"}
            alt={alt}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
