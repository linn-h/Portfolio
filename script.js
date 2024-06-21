const toggleButton = document.querySelector('.toggle');
const navbarLinks = document.querySelector('.nav_links');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

document.addEventListener("DOMContentLoaded", function () {
  var typewriter = document.querySelector(".typewriter");
  var cover = document.querySelector(".cover");
  var aboutSection = document.querySelector(".about_me");
  var skillsSection = document.querySelector(".skills");

  startTypewriterEffect();

  // Duration of typewriter animation
  var animationDuration = parseFloat(window.getComputedStyle(typewriter).animationDuration) * 10500;

  // Cover after Typewriter
  setTimeout(function () {
    cover.style.display = "block";
    cover.style.animationPlayState = "running";

    // List Typewriter after Cover
    startListTypewriterEffect();

    // Something...Idk removing it will make the website as not intended. So yeah...
    setTimeout(function () {
      aboutSection.style.animationPlayState = "paused";
      skillsSection.style.animationPlayState = "running";
    }, animationDuration + 1500); // Extra delay
  }, animationDuration - 50); // Extra delay for the finishing of the main section's typewriter animation
});

// Main section's Typewriter Animation
function startTypewriterEffect() {
  var textContainer = document.querySelector('.typewriter');
  var texts = [
    "Hello there.",
    "My name is Harry.",
    "And here's about me."
  ];
  var textIndex = 0;

  function type() {
    var text = texts[textIndex];
    var characters = text.split('');
    var charIndex = 0;
    var typingInterval = setInterval(function () {
      if (charIndex < characters.length) {
        textContainer.textContent += characters[charIndex];
        charIndex++;
      } else {
        clearInterval(typingInterval);
        setTimeout(function () {
          textContainer.textContent = '';
          textIndex = (textIndex + 1) % texts.length;
          if (textIndex === 0) {
            // Resetting the typewriter after it ends
            textContainer.textContent = '';
          } else {
            // Move to the next text
            type();
          }
        }, 3000);
      }
    }, 150);
  }
  type();
}

// List Typewriter Animation
function startListTypewriterEffect() {
  var textContainers = document.querySelectorAll('.about li');

  var listTexts = [
    "Name: Khant Zayar Linn@Harry",
    "Age: 15",
    "Email: khantzayarlinn09@gmail.com",
    "From: Myanmar (Burma)",
    "Experience: 1 year & 5 months"
  ];

  var totalDelay = 0;
  // Looping
  textContainers.forEach(function (textContainer, index) {
    var text = listTexts[index];

    // Calculation for duration
    var typingDuration = text.length * 50;

    // Initialize with delay
    setTimeout(function () {
      typewriterEffect(textContainer, text);
    }, totalDelay);

    totalDelay += typingDuration + 250;
  });
}

// Once again, something to do with list typewriter effect. If removed, it will not start. So yeah...
function typewriterEffect(textContainer, text) {
  var characters = text.split('');
  var charIndex = 0;
  var typingInterval = setInterval(function () {
    if (charIndex < characters.length) {
      textContainer.textContent += characters[charIndex];
      charIndex++;
    } else {
      clearInterval(typingInterval);
    }
  }, 50);
}

// Something to do with timeline. Again, if removed, it won't start at all. So yeah...
var items = document.querySelectorAll(".timeline li");

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function callbackFunc() {
  for (var i = 0; i < items.length; i++) {
    if (isElementInViewport(items[i])) {
      if (!items[i].classList.contains("in-view")) {
        items[i].classList.add("in-view");
      }
    } else if (items[i].classList.contains("in-view")) {
      items[i].classList.remove("in-view");
    }
  }
}

window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);