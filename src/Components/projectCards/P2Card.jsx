import React from "react";
import "./Card.css";
import html from "../../Images/html.png";
import css from "../../Images/CSS.png";
import JS from "../../Images/js.png";
import Git from "../../Images/git.png"
import p2 from "../../Images/p2.png";

const P2Card = () => {
  return (
    <div>
      <div className="firstProjectDisplay">
        <div className="firstProject1">
          <a
            target="blank"
            href="https://github.com/Raj210Kumari/Sephora-Clone"
          >
            <img src={p2} alt="Sephora" className="projectImg1" />
          </a>
        </div>
        <div>
          <h2>Sephora Clone</h2>
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
            Sephora is a French multinational retailer of luxury beauty and
            skincare e-commerce platfom.
          </p>
        </div>
        <div>
          <button>
            <a
              target="blank"
              href="https://graceful-longma-ee5897.netlify.app/index.html"
            >
              Link
            </a>
          </button>
          <button>
            <a
              target="blank"
              href="https://github.com/Raj210Kumari/Sephora-Clone"
            >
              Github
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default P2Card;
