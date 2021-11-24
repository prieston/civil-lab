import { HTMLClip, CSSEffect } from "@donkeyclip/motorcortex";
import initParams from "./initParams";

export const clip = new HTMLClip({
  html: `
    <div class="container">
        <img width="300" id="civil" src="https://raw.githubusercontent.com/prieston/civil-lab/main/clip/assets/civil.png">
        <img src="https://prieston.github.io/civil-lab/clip/assets/rest.png">
    </div>`,
  css: `
  img{
    object-fit:contain;
    height:100%;
  }
  #civil{
    position:absolute;
    left:320px;
    top:-65px;
    transform-origin:50px 100px;
  }
  .container {
    object-fit:contain;
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items: center;
    color: {{ initParams.color }};
  }
  `,
  host: document.getElementById("clip"),
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParamsValidationRules: {
    color: {
      label: "Text Color",
      type: "color",
      optional: true,
      default: "white",
    },
  },
  initParams: initParams[1].value,
});

const MyIncident = new CSSEffect(
  {
    animatedAttrs: {
      transform: {
        rotateZ: "30deg",
      },
    },
  },
  {
    selector: "#civil",
    duration: 1000,
    easing: "easeOutQuart",
  }
);
const MyIncident1 = new CSSEffect(
  {
    animatedAttrs: {
      transform: {
        rotateZ: "-30deg",
      },
    },
  },
  {
    selector: "#civil",
    duration: 1000,
    easing: "easeOutQuart",
  }
);
const MyIncident2 = new CSSEffect(
  {
    animatedAttrs: {
      transform: {
        rotateZ: "0deg",
      },
    },
  },
  {
    selector: "#civil",
    duration: 500,
    easing: "easeOutQuart",
  }
);
clip.addIncident(MyIncident, 0);
clip.addIncident(MyIncident1, 1000);
clip.addIncident(MyIncident2, 2000);
