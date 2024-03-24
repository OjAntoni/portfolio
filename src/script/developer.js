window.addEventListener("scroll", () => {
  let information = document.querySelector(".developer");
  let informationTitle = document.querySelector(".developer__title");
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
    distanceFromViewportBottomToInformationTop * 0.8
  }px`;
});

function adjustFontSize() {
  const container = document.querySelector(".developer");
  const text = document.querySelector(".developer__title");

  // Start with a reasonable minimum font size
  let fontSize = 10; // Minimum font size in pixels

  // Set the text to the minimum font size initially
  text.style.fontSize = fontSize + "px";

  // Incrementally increase font size until the text width exceeds the container width
  while (text.scrollWidth <= container.offsetWidth && fontSize < 180) {
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
