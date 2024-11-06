import React from "react";
import { socialLinks } from "@/lib/social-links";

export default function HeroSocialLinks() {
  return (
    <div className="flex gap-8">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl ">
            <Icon className="hover:text-violet-400" />
          </a>
        );
      })}
    </div>
  );
}
