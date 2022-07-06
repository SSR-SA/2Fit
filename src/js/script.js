/** @format */

// INTRODUCTION TO JAVASCRIPT
/*console.log("Hello JavaScript");

const userName = "JamesMaxwell";
console.log(userName);

const sum = 2 + 2;
console.log(sum);
console.log(2 * 3);

const h1 = document.querySelector(".heading-primary");
console.log(h1);
console.log(h1.innerHTML);*/

/*=====================================================*/
// FUNCTION WITHOUT PARAMETERS
/* function myFirstFunction() {
  alert("Hello JavaScript");
}

myFirstFunction(); */

/*=====================================================*/
// FUNCTION WITH PARAMETERS
/* function sum(a, b) {
  return a + b;
}

var x = sum(3, 5);

console.log(x); */

/*=====================================================*/
// FUNCTION WITH PARAMETERS
/* function num(z) {
  if (z % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

var c = num(3);

console.log("the number is " + c); */

/*=====================================================*/
// PRINTING THE CURRENT YEAR FOR COPYRIGHT STATEMENT
const date = new Date();
const year = date.getFullYear();
document.getElementById("year").innerHTML = year;

/*=====================================================*/
// POWERING MOBILE NAVIGATION
let isMenuOpen = false;
const burgerButton = document.querySelector(".header__burger");
const header = document.querySelector(".header__nav");

burgerButton.addEventListener("click", function () {
  header.classList.toggle("header__nav--open");

  isMenuOpen = !isMenuOpen;

  if (isMenuOpen) {
    burgerButton.classList.add("burgerButton-open");
  } else {
    burgerButton.classList.remove("burgerButton-open");
  }
});

/*=====================================================*/
// REVEAL ON SCROLL WITH INTERSECTION OBSERVER API
const faderIn = document.querySelectorAll(".fade-in");
const slideIn = document.querySelectorAll(".slide");

const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -200px 0px",
};

// OBSERVER
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("reveal");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faderIn.forEach((fader) => {
  appearOnScroll.observe(fader);
});

slideIn.forEach((slider) => {
  appearOnScroll.observe(slider);
});
