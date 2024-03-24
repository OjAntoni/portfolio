window.addEventListener("scroll", () => {
  let information = document.querySelector(".information");
  let informationTitle = document.querySelector(".information__title");
  let informationRect = information.getBoundingClientRect(); // Using getBoundingClientRect()

  // Now, calculate the distance from the bottom of the viewport to the top of the information element
  let distanceFromViewportBottomToInformationTop =
    window.innerHeight - informationRect.top;

  console.log(distanceFromViewportBottomToInformationTop); // Updated logging to reflect the correct value

  // Here, you should probably adjust how you set the bottom style.
  // Assuming you want to move the title based on the scrolling,
  // you might want to subtract the value from some fixed position or set it directly,
  // but ensure the unit is correct (e.g., pixels)
  informationTitle.style.bottom = `${
    distanceFromViewportBottomToInformationTop * 0.18
  }px`;
});

window.addEventListener("scroll", () => {
  let information = document.querySelector(".information");
  let informationContent = document.querySelector(".information__content");
  let informationRect = information.getBoundingClientRect(); // Using getBoundingClientRect()

  // Now, calculate the distance from the bottom of the viewport to the top of the information element
  let distanceFromViewportBottomToInformationTop =
    window.innerHeight - informationRect.top;

  //   console.log(distanceFromViewportBottomToInformationTop); // Updated logging to reflect the correct value

  // Here, you should probably adjust how you set the bottom style.
  // Assuming you want to move the title based on the scrolling,
  // you might want to subtract the value from some fixed position or set it directly,
  // but ensure the unit is correct (e.g., pixels)
  informationContent.style.bottom = `${
    distanceFromViewportBottomToInformationTop * 0.16
  }px`;
});

function adjustFontSize() {
  const container = document.querySelector(".information");
  const text = document.querySelector(".information__title");

  // Start with a reasonable minimum font size
  let fontSize = 10; // Minimum font size in pixels

  // Set the text to the minimum font size initially
  text.style.fontSize = fontSize + "px";

  // Incrementally increase font size until the text width exceeds the container width
  while (text.scrollWidth <= container.offsetWidth && fontSize < 160) {
    // Assuming 160px is the maximum reasonable font size
    fontSize++;
    text.style.fontSize = fontSize + "px";
  }

  // Once the loop finds the font size that causes overflow, step back one increment
  if (text.scrollWidth > container.offsetWidth) {
    fontSize--;
    text.style.fontSize = fontSize + "px";
  }
}

document.addEventListener("DOMContentLoaded", adjustFontSize);
window.addEventListener("resize", adjustFontSize);
document.addEventListener("fullscreenchange", adjustFontSize);
document.addEventListener("webkitfullscreenchange", adjustFontSize);
document.addEventListener("mozfullscreenchange", adjustFontSize);
document.addEventListener("MSFullscreenChange", adjustFontSize);

adjustFontSize();

// Helper function to add a class to an element
function addClass(elem, className) {
  if (!elem.classList.contains(className)) {
    elem.classList.add(className);
  }
}

// Helper function to remove a class from an element
function removeClass(elem, className) {
  if (elem.classList.contains(className)) {
    elem.classList.remove(className);
  }
}

window.addEventListener("scroll", function () {
  let information = document.querySelector(".information");
  let informationContent = document.querySelector(".timeline");
  let informationRect = information.getBoundingClientRect(); // Using getBoundingClientRect()

  // Now, calculate the distance from the bottom of the viewport to the top of the information element
  let distanceFromViewportBottomToInformationTop =
    document.querySelector(".timeline").getBoundingClientRect().height -
    informationRect.top;

  let dist =
    this.document.querySelector("#entry1").getBoundingClientRect().top -
    information.getBoundingClientRect().top;

  console.error(dist);
  // if (dist <= 80) return;
  //   console.log(distanceFromViewportBottomToInformationTop); // Updated logging to reflect the correct value

  // Here, you should probably adjust how you set the bottom style.
  // Assuming you want to move the title based on the scrolling,
  // you might want to subtract the value from some fixed position or set it directly,
  // but ensure the unit is correct (e.g., pixels)
  informationContent.style.bottom = `${
    distanceFromViewportBottomToInformationTop * 0.1
  }px`;
});

window.addEventListener("scroll", function () {
  let information = document.querySelector(".information");
  let entries = document.querySelectorAll(".timeline__entry");

  let dist =
    this.document.querySelector("#entry1").getBoundingClientRect().top -
    information.getBoundingClientRect().top;

  //   if (dist <= 80) return;

  entries.forEach((entry, index) => {
    let informationRect = information.getBoundingClientRect();

    let distanceFromViewportBottomToInformationTop =
      window.innerHeight - informationRect.top;

    entry.style.bottom = `${
      distanceFromViewportBottomToInformationTop * (0.9 + index * 0.3)
    }px`;
  });
});

let entries = document.querySelectorAll(".timeline__entry");
entries.forEach((entry, index) => {
  entry.style.marginBottom = 400 + "px";
});

document.addEventListener("DOMContentLoaded", () => {
  let circles = document.querySelectorAll(".timeline .entry__circle");
  console.log(circles);

  for (let i = 0; i < circles.length - 1; i++) {
    console.log(i);
    let circle1 = circles[i];
    let circle2 = circles[i + 1];

    let line = document.createElement("div");
    line.classList.add("line");

    let circle1Rect = circle1.getBoundingClientRect();
    let circle2Rect = circle2.getBoundingClientRect();

    // Make sure to use `position: absolute;` if appending to a positioned container
    line.style.position = "fixed";
    line.style.left = `${circle1Rect.left}px`;

    // Assuming the circles are in order from top to bottom,
    // circle1's bottom to circle2's top will be the line's top and height
    line.style.top = `${circle1Rect.bottom}px`;
    line.style.height = `${circle2Rect.top - circle1Rect.bottom}px`;

    // Append the line to the circle's container or another appropriate container
    circle1.parentElement.appendChild(line);
  }
});

window.addEventListener("scroll", () => {
  let lines = document.querySelectorAll(".line");
  console.log(lines);

  for (let i = 0; i < lines.length; i++) {
    console.log(i);
    let circle1 = document.querySelector("#circle" + (i + 1));
    let circle2 = document.querySelector("#circle" + (i + 2));

    let circle1Rect = circle1.getBoundingClientRect();
    let circle2Rect = circle2.getBoundingClientRect();

    lines[i].style.left = `${circle1Rect.left + circle1Rect.width / 2 - 1}px`;

    // Assuming the circles are in order from top to bottom,
    // circle1's bottom to circle2's top will be the line's top and height
    lines[i].style.top = `${circle1Rect.bottom}px`;
    lines[i].style.height = `${circle2Rect.top - circle1Rect.bottom}px`;

    // Append the line to the circle's container or another appropriate container
  }
});

window.addEventListener("resize", () => {
  let lines = document.querySelectorAll(".line");
  console.log(lines);

  for (let i = 0; i < lines.length; i++) {
    console.log(i);
    let circle1 = document.querySelector("#circle" + (i + 1));
    let circle2 = document.querySelector("#circle" + (i + 2));

    let circle1Rect = circle1.getBoundingClientRect();
    let circle2Rect = circle2.getBoundingClientRect();

    lines[i].style.left = `${circle1Rect.left + circle1Rect.width / 2 - 1}px`;

    // Assuming the circles are in order from top to bottom,
    // circle1's bottom to circle2's top will be the line's top and height
    lines[i].style.top = `${circle1Rect.bottom}px`;
    lines[i].style.height = `${circle2Rect.top - circle1Rect.bottom}px`;

    // Append the line to the circle's container or another appropriate container
  }
});
