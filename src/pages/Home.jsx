import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Star } from "lucide-react";
import perfil from "../assets/perfil.jpg";
import welcome from "../assets/welcome.gif";
import music2 from "../assets/music2.gif";
import bunny from "../assets/bunny.gif";
import flan from "../assets/flan.gif";

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
          <p className="eyebrow">bienvenid@ a mi pequeño rincón de internet ✿</p>
          <h1>Ari <span>♡</span>˖°.</h1>
          <p className="intro-text">
            Soy <span className="underline">Ari</span>, estudiante de programación y <strong>desarrolladora web</strong> en 
            formación. Este es mi sitio personal donde guardo un poco de todo lo que me gusta.
          </p>

          <div className="currently-card">
            <div className="currently-title">
              <Heart size={14} fill="currentColor" /> currently
            </div>
            <ul>
              <li><img src={bunny} alt="Decorative"/><b>watching:</b> dbz kai / got / los simpsons</li>
              <li><img src={music2} alt="Decorative"/><b>listening:</b> rock me - one direction</li>
              <li><img src={flan} alt="Decorative"/><b>playing:</b> fortnite / dbd / roblox / mobile legends</li>
            </ul>
          </div>

          <div class="divider-container"><img src={welcome} alt="Decorative"/></div>
        </div>
      </div>

      <div className="welcome-box">
        <div>
          <Star size={18} fill="currentColor" />
          <h2>hello!</h2>
        </div>
        <p>
          En este sitio además vas a encontrar varios de los proyectos web que fui creando a lo largo de mi carrera ✧ Se libre de navegar~♡
        </p>
      </div>
    </section>
  );
}