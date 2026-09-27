import React from "react";
import selena1 from "../assets/selena1.jpg";
import selena2 from "../assets/selena2.jpg";
import melanie from "../assets/melanie.png";
import paramore1 from "../assets/paramore1.png";
import paramore2 from "../assets/paramore2.jpg";
import kpp from "../assets/kpp.jpg";
import bmth from "../assets/bmth.jpg";
import thecure from "../assets/thecure.webp";
import michael from "../assets/michael.png";
import bts5 from "../assets/bts5.jpg";
import bts4 from "../assets/bts4.webp";
import bts3 from "../assets/bts3.jpg";
import bts1 from "../assets/bts1.webp";
import bts6 from "../assets/bts6.jpg";
import bts2 from "../assets/bts2.webp";
import bmth2 from "../assets/bmth2.png";
import selena3 from "../assets/selena3.png";
import bjork from "../assets/bjork.jpg";
import soda from "../assets/soda.jpg";

const characters = [
  {
    name: "Kiss & Tell",
    role: "Selena Gomez",
    image: selena1
  },
  {
    name: "Crybaby",
    role: "Melanie Martinez",
    image: melanie
  },
  {
    name: "Brand New Eyes",
    role: "Paramore",
    image: paramore1
  },
  {
    name: "all we know is falling",
    role: "Paramore",
    image: paramore2
  },
  {
    name: "KPP best",
    role: "Kyary Pamyu Pamyu",
    image: kpp
  },
  {
    name: "Thats the spirit",
    role: "Bring me the horizon",
    image: bmth
  },
  {
    name: "Disintegration",
    role: "The cure",
    image: thecure
  },
  {
    name: "Bad",
    role: "Michael Jackson",
    image: michael
  },
  {
    name: "Stars Dance",
    role: "Selena Gomez",
    image: selena2
  },
  {
    name: "The most beautiful moment in life pt.2",
    role: "BTS",
    image: bts5
  },
  {
    name: "The most beautiful moment in life pt.1",
    role: "BTS",
    image: bts4
  },
  {
    name: "Skool Luv Affair",
    role: "BTS",
    image: bts3
  },
  {
    name: "2 kool 4 skool",
    role: "BTS",
    image: bts1
  },
  {
    name: "Wings",
    role: "BTS",
    image: bts6
  },
  {
    name: "Dark & Wild",
    role: "BTS",
    image: bts2
  },
  {
    name: "Sempiternal",
    role: "Bring me the horizon",
    image: bmth2
  },
  {
    name: "For You",
    role: "Selena Gomez",
    image: selena3
  },
  {
    name: "Debut",
    role: "Bjork",
    image: bjork
  },
  {
    name: "Me verás volver",
    role: "Soda Stereo",
    image: soda
  },
];

export default function Music() {
  return (
    <section className="content-page">
      <div className="section-heading">
        <p className="eyebrow">mis favoritos en la música ✿</p>
        <h1>fav albums <span>♡</span></h1>
      </div>

      <div className="cards-grid">
        {characters.map((character) => (
          <article className="character-card" key={character.name}>
            <img src={character.image} alt={character.name} />
            <div className="character-info">
              <h2>{character.name}</h2>
              <p>{character.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}