const firstbtn = document.querySelector("#scroll");
const secondbtn = document.querySelector("#scroll_second");
const section3 = document.querySelector("#section_three");
const section7 = document.querySelector("#section_seven");

firstbtn.addEventListener("click", function (e) {
  section3.getBoundingClientRect();
  section3.scrollIntoView({ behavior: "smooth" });
});
secondbtn.addEventListener("click", function (e) {
  section7.getBoundingClientRect();
  section7.scrollIntoView({ behavior: "smooth" });
});

let header = document.querySelectorAll(".accordion-header");

header.forEach((header) => {
  header.addEventListener("click", function (e) {
    let accordion = document.querySelectorAll(".accordion");
    let parentElm = header.parentElement;
    let siblings = this.nextElementSibling;

    accordion.forEach((element) => {
      element.children[1].style.maxHeight = null;
    });

    parentElm.classList.toggle("active");
    if (parentElm.classList.contains("active")) {
      accordion.forEach((element) => {
        element.classList.remove("active");
      });
      parentElm.classList.toggle("active");
      if (siblings.style.maxHeight) {
        siblings.style.maxHeight = null;
      } else {
        siblings.style.maxHeight = siblings.scrollHeight + "px";
      }
    }
  });
});

window.onload = function () {
  header[0].click();
};
