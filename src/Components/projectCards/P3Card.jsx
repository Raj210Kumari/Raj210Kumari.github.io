import React from "react";
import "./Card.css";
import html from "../../Images/html.png";
import css from "../../Images/CSS.png";
import JS from "../../Images/js.png";
import Git from "../../Images/git.png";
import p3 from "../../Images/p3.png";

const P3Card = () => {
  return (
    <div>
      <div className="firstProjectDisplay">
        <div className="firstProject1">
          <a
            target="blank"
            href="https://github.com/Raj210Kumari/BathBodyWorks-Clone"
          >
            <img src={p3} alt="BathBodyWorks" className="projectImg1" />
          </a>
        </div>
        <div>
          <h2>Bath&Body Works</h2>
        </div>
        <div>
          <img src={html} alt="HTML" />
          <img src={css} alt="CSS" />
          <img src={JS} alt="JS" />
          <img src={Git} alt="GitHub" />
        </div>
        <div>
          <p>HTML || CSS || JS || Git</p>
          <br />
          <p>
            BathBadyWorks is American retail store chain. It mainly sells soaps,
            perfumes, candles, etc.{" "}
          </p>
        </div>
        <div>
          <button>
            <a
              target="blank"
              href="https://wonderful-pithivier-711422.netlify.app/"
            >
              Link
            </a>
          </button>
          <button>
            <a
              target="blank"
              href="https://github.com/Raj210Kumari/BathBodyWorks-Clone"
            >
              Github
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default P3Card;
