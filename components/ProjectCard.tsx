
import Link from "next/link";
import Image from "next/image";

export function Card({
  title,
  description,
  image,
  url,
}: {
  title: string;
  description: string;
  image: string;
  url: string;
}) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full overflow-hidden rounded-xl border border-[#35695A] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"
    >
      {/* Project image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
        <Image
          src={image}
          alt={title}
          width={800}
          height={500}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>

      {/* Project information */}
      <div className="flex min-h-36 items-start justify-between gap-4 bg-surface-muted p-5 md:p-6">
        <div className="flex-1">
          <h3 className="text-lg font-semibold tracking-tight text-heading transition-colors group-hover:text-brand md:text-xl">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
