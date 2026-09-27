import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Star } from "lucide-react";
import perfil from "../assets/perfil.jpg";

export default function Home() {
  return (
    <section className="home-page">
      <div className="hero-grid">
        <div className="hero-image-frame">
          <img
            src={perfil}
            alt="Decorative"
          />
          <div className="image-sticker">♡</div>
        </div>

        <div className="intro">
          <p className="eyebrow">bienvenid@ a mi pequeño espacio ✿</p>
          <h1>Ari <span>♡</span>˖°.</h1>
          <p className="intro-text">
            Soy Ari, estudiante de programación y desarrolladora web en 
            formación. Este es mi pequeño sitio personal n.n
          </p>

          <div className="currently-card">
            <div className="currently-title">
              <Heart size={14} fill="currentColor" /> currently
            </div>
            <ul>
              <li><b>watching</b> dbz kai / got / los simpsons</li>
              <li><b>listening</b> rock me - one direction</li>
              <li><b>playing</b> dbd / ml / fortnite</li>
            </ul>
          </div>

          <Link className="text-link" to="/about">
            a little more about me <ArrowRight size={15} />
          </Link>
        </div>
      </div>

      <div className="welcome-box">
        <div>
          <Star size={18} fill="currentColor" />
          <h2>welcome!</h2>
        </div>
        <p>
          En este sitio además de compartir mis hobbies e intereses , se pueden visualizar proyectos de sitios web realizados por mi ✧
        </p>
      </div>
    </section>
  );
}