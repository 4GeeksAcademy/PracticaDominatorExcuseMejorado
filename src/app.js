/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function dominator(p, a, n) {
    let resultado = [];
    for (var i = 0; i < p.length; i++) {
      for (var j = 0; j < a.length; j++) {
        for (var k = 0; k < n.length; k++) {
          resultado += " " + p[i] + a[j] + n[k] + ".com";
        }
      }
    }
    return resultado;
  }
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let html = dominator(pronoun, adj, noun);
  document.querySelector("#dominator").innerHTML = html
    .map(item => '<li class="list-group-item">' + item + "</li>")
    .join("");
  console.log(html);
};
