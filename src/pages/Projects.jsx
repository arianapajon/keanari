import React from "react";
import { ExternalLink, Heart, Croissant, Cat, LeafyGreen, Fish } from "lucide-react";

const projects = [
  { name: "Petit Dulce Pastelería", handle: "https://petit-dulce.vercel.app/", icon: Croissant, href: "https://petit-dulce.vercel.app/" },
  { name: "Cat Market", handle: "https://catmarket-react.vercel.app/", icon: Cat, href: "https://catmarket-react.vercel.app/" },
  { name: "Tierra Media", handle: "https://tierra-media-sepia.vercel.app/", icon: LeafyGreen, href: "https://tierra-media-sepia.vercel.app/" },
  { name: "Amary Tienda", handle: "https://amarytienda.vercel.app/", icon: Heart, href: "https://amarytienda.vercel.app/" },
  { name: "Frutiger Dreams", handle: "https://frutiger-dreams.vercel.app/", icon: Fish, href: "https://frutiger-dreams.vercel.app/" },
];

export default function Projects() {
  return (
    <section className="content-page socials-page">
      <div className="section-heading">
        <p className="eyebrow">mis creaciones ✿</p>
        <h1>proyectos <span>♡</span></h1>
      </div>

      <div className="social-list">
        {projects.map(({ name, handle, icon: Icon, href }) => (
          <a className="social-card" href={href} key={name}>
            <span className="social-icon"><Icon size={20} /></span>
            <span>
              <b>{name}</b>
              <small>{handle}</small>
            </span>
            <ExternalLink size={16} />
          </a>
        ))}
      </div>
    </section>
  );
}