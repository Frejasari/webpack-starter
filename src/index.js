import _ from "lodash";
import "./style.css";

function component() {
  let element = document.getElementById("widget");

  element.innerHTML = _.join(["React", "webpack"], " ");
  element.classList.add("hello");

  return element;
}

document.body.appendChild(component());
