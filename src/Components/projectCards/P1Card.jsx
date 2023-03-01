import React from "react";
import "./Card.css";
import html from "../../Images/html.png";
import css from "../../Images/CSS.png";
import JS from "../../Images/js.png";
import ReactLogo from "../../Images/react.png";
import ReduxLogo from "../../Images/redux.png";
import bootstrap from "../../Images/bootstrap.png";
import p1 from "../../Images/p1.png";

const P1Card = () => {
  return (
    <div>
      <div className="firstProjectDisplay">
        <div className="firstProject1">
          <a
            target="blank"
            href="https://github.com/Raj210Kumari/Geekbuying-Clone"
          >
            <img src={p1} alt="Geekbuying" className="projectImg1" />{" "}
          </a>
        </div>
        <div>
          <h2>Geekbuying Clone</h2>
        </div>
        <div>
          <img src={ReactLogo} alt="React" />
          <img src={ReduxLogo} alt="Redux" />
          <img src={html} alt="HTML" />
          <img src={css} alt="CSS" />
          <img src={JS} alt="JS" />
          <img src={bootstrap} alt="Bootstrap" />
        </div>
        <div>
          <p>React || Redux || HTML || CSS || JS || Bootstrap</p>
          <br />
          <p>
            Geekbuying leading online shop selling a wide range of consumer
            electronic gadgets.
          </p>
        </div>
        <div>
          <button>
            <a
              target="blank"
              href="https://effervescent-dragon-9ae52a.netlify.app/"
            >
              Link
            </a>
          </button>
          <button>
            <a
              target="blank"
              href="https://github.com/Raj210Kumari/Geekbuying-Clone"
            >
              Github
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default P1Card;
