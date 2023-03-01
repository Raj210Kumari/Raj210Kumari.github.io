import React from "react";
import "./Card.css";
import html from "../../Images/html.png";
import css from "../../Images/CSS.png";
import JS from "../../Images/js.png";
import Git from "../../Images/git.png";
import p4 from "../../Images/p4.png";

const P4Card = () => {
  return (
    <div>
      <div className="firstProjectDisplay">
        <div className="firstProject1">
          <a
            target="blank"
            href="https://github.com/Raj210Kumari/BeautyBebo-Clone"
          >
            <img src={p4} alt="BeautyBebo" className="projectImg1" />
          </a>
        </div>
        <div>
          <h2>Beauty Bebo</h2>
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
            BeautyBebo is online retail store for Skin care, Hair care, Personal
            care, Baby care, etc.{" "}
          </p>
        </div>
        <div>
          <button>
            <a
              target="blank"
              href="https://dynamic-sfogliatella-27dde0.netlify.app/"
            >
              Link
            </a>
          </button>
          <button>
            <a
              target="blank"
              href="https://github.com/Raj210Kumari/BeautyBebo-Clone"
            >
              Github
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default P4Card;
