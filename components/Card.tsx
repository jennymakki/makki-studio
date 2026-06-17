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
      className="block h-full"
    >
      <article className="group h-full flex flex-col rounded-2xl overflow-hidden border border-[rgba(47,93,80,0.12)] bg-[#F7F2EA] shadow-sm hover:shadow-md transition">
        
        <div className="aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={800}
            height={500}
            className="w-full h-full object-fit group-hover:scale-105 transition duration-500"
          />
        </div>

        <div className="p-5 flex flex-col flex-1">
          <h3 className="text-lg font-medium text-[#2F5D50]">
            {title}
          </h3>

          <p className="mt-2 text-sm text-[#3A3A3A] leading-relaxed flex-1">
            {description}
          </p>
        </div>

      </article>
    </Link>
  );
}