import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TechCard({
  name,
  icon,
  description,
  link,
}: {
  name: string;
  icon: string;
  description: string;
  link?: string;
}) {
  return (
    <div className="group relative p-4 flex items-center justify-center hover:scale-105 transition-transform duration-300  bg-violet-500 bg-opacity-20 rounded-md overflow-hidden min-h-32 h-full">
      <div className="flex flex-col items-center group-hover:blur-[1px] transition-opacity duration-300">
        <Image
          height={512}
          width={512}
          src={icon}
          alt={name}
          className="h-16 w-16 object-contain"
        />
        <p className="text-center text-white my-2 text-sm">{name}</p>
      </div>
      <div className="w-full h-full gap-y-2 flex flex-col justify-center  p-2 absolute  left-0 text-xs translate-y-full group-hover:translate-y-0 transition-transform bg-black bg-opacity-50 duration-300">
        {description}
        {link && (
          <Link
            href={link}
            className="text-violet-500 hover:text-violet-400 hover:underline">
            Learn more
          </Link>
        )}
      </div>
    </div>
  );
}
