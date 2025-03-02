import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  tagline: string;
  image: string;
  link: string;
}

export default function ProjectCard({
  title,
  tagline,
  image,
  link,
}: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-gray-900">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <h3 className="mb-2 text-3xl font-bold text-white">{tagline}</h3>
        </div>
      </div>
      <div className="flex items-center justify-between p-4">
        <h4 className="text-sm font-medium uppercase tracking-wider text-gray-300">
          {title}
        </h4>
        <Link
          href={link}
          className="flex items-center text-sm text-gray-400 hover:text-white"
        >
          <span className="mr-1">CLICK HERE TO VISIT</span>
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </div>
  );
}
