import { duplicateElement } from "https://codepen.io/tresorama/pen/jOmJyLR.js";

// CLONE THE CAROUSEL FOR VARIATIONS
duplicateElement({
  selector: ".carousel",
  times: 3,
  elementModifierCallback: (el, index) => {
    el.classList.remove('my-carousel-1');
    el.classList.add(`my-carousel-${index+2}`);
  }
});

// VIEWPORT DETAILS BANNER !!!!! imported in settings > js
// ViewportDetailsBanner();