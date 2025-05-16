import Image from "next/image";

type FullWidthImageProps = {
  src: string;
  alt: string;
};

export default function FullWidthImage({ src, alt }: FullWidthImageProps) {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-[95%] ">
        <div className="aspect-[16/9] w-full overflow-hidden ">
          <Image
            src={src}
            alt={alt}
            width={1000}
            height={1000}
            className="w-full bg-muted-foreground/10 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
