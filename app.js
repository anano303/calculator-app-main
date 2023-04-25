"use strict";

let slider = document.getElementById("range");
let one = document.getElementById("one");
let two = document.getElementById("two");
let three = document.getElementById("three");
let toggle = document.querySelectorAll("#range::-webkit-slider-thumb");

function del() {
  let value = document.getElementById("screen").value;
  document.getElementById("screen").value = value.substr(0, value.length - 1);
}

slider.oninput = function () {
  slider.style.left = this.value + "%";
};

one.addEventListener("click", () => {
  let body = document.querySelector("body");
  body.classList.add("dark");
  body.classList.remove("grey");
  //toggle.style.left = "0%";
});
two.addEventListener("click", () => {
  let body = document.querySelector("body");
  body.classList.remove("dark");
  body.classList.add("grey");
  //toggle.style.left = "38%";
});
three.addEventListener("click", () => {
  let body = document.querySelector("body");
  body.classList.remove("dark");
  body.classList.remove("grey");
  //toggle.style.left = "68%";
});

const rangeInput = document.getElementById("range");
rangeInput.addEventListener("input", function () {
  let body = document.querySelector("body");
  switch (rangeInput.value) {
    case "1":
      body.classList.add("dark");
      body.classList.remove("grey");
      break;

    case "2":
      body.classList.remove("dark");
      body.classList.add("grey");
      break;

    case "3":
      body.classList.remove("dark");
      body.classList.remove("grey");
      break;
  }
});

/*(function (range) {
  range.addEventListener(
    "change",
    () => {
      switch (this.value) {
        case "1":
          range.body.classList.remove("grey");
          range.body.classList.add("dark");
          range.body.classList.remove("body");
          break;

        case "2":
          range.body.classList.add("grey");
          range.body.classList.remove("dark");
          range.body.classList.remove("body");
          break;

        case "3":
          range.body.classList.remove("grey");
          range.body.classList.remove("dark");
          range.body.classList.add("body");
          break;
      }
    },
    false
  );
})(document);*/
