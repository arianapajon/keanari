import React from "react";
import { Heart, Coffee, Palette, Code2 } from "lucide-react";
import misaki from "../assets/misaki.gif";
import rila from "../assets/rila.gif";
import michi from "../assets/michi.gif";
import music from "../assets/music.gif";
import heart from "../assets/heart.gif";
import flores from "../assets/flores.gif";
import stars from "../assets/stars.gif";
import divider from "../assets/divider.gif";

export default function About() {
  return (
    <section className="content-page">
      <div className="section-heading">
        <p className="eyebrow">pequeña descripción ✿</p>
        <h1>profile <span>♡</span></h1>
      </div>

      <div className="two-column">
        <div className="soft-card">
          <h2><Heart size={17} fill="currentColor" /> ola</h2>
          <div class="divider-container"><img src={divider} alt="Decorative"/></div>
                <img src={misaki} alt="Decorative" className="about-frame"/>
          <p>Mi breve descripción principalmente se basa en mi gusto por la música, los michis, dormir, coleccionar cosas y un largo etcétera.</p>
          <div className="mini-socials">
  <a href="https://letterboxd.com/keanari/" target="_blank" rel="noopener noreferrer" className="mini-social-button">letterboxd</a>
  <a href="https://keanari.tumblr.com/" target="_blank" rel="noopener noreferrer" className="mini-social-button">tumblr</a>
          </div>
        </div>

        <div className="soft-card">
          <h2>✦ Likes</h2>
          <ul className="fact-list">
            <li><img src={rila} alt="Decorative"/> rilakkuma </li>
            <li><img src={michi} alt="Decorative"/> michis</li>
            <li><img src={music} alt="Decorative"/> music</li>
            <li><img src={heart} alt="Decorative"/> kawaii stuff</li>
            <li><img src={flores} alt="Decorative"/> primavera</li>
            <li><img src={stars} alt="Decorative"/> sleep</li>
            <li><Code2 size={15} /> desarrollo web</li>
            <div class="divider-container"><img src={divider} alt="Decorative"/></div>
          </ul>
        </div>
      </div>
    </section>
  );
}