window.addEventListener("scroll", () => {
  let information = document.querySelector(".skillset");
  let informationTitle = document.querySelector(".skillset__title");
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
    distanceFromViewportBottomToInformationTop * 0.38
  }px`;
});

function adjustFontSize() {
  const container = document.querySelector(".skillset");
  const text = document.querySelector(".skillset__title");

  // Start with a reasonable minimum font size
  let fontSize = 10; // Minimum font size in pixels

  // Set the text to the minimum font size initially
  text.style.fontSize = fontSize + "px";

  // Incrementally increase font size until the text width exceeds the container width
  while (text.scrollWidth <= container.offsetWidth && fontSize < 190) {
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

// function trackSkillPositions() {
//   const skills = document.querySelectorAll(".skill"); // Select all skill elements
//   let positions = []; // Array to hold the positions of each skill

//   function updatePositions() {
//     positions = []; // Reset the array to capture new positions
//     skills.forEach((skill) => {
//       const rect = skill.getBoundingClientRect(); // Get the position of the skill relative to the viewport

//       skill.style.transform = `scale(${
//         1 +
//         0.28 -
//         Math.abs(window.innerWidth / 2 - rect.left - rect.width / 2) / 700
//       })`;
//       console.log({ top: rect.top, left: rect.left });

//       // Store the top and left values
//       // For debugging, you can log the positions or do something with them here
//       // console.log(`Skill: ${skill.textContent}, Position: ${rect.left}, ${rect.top}`);
//     });

//     requestAnimationFrame(updatePositions); // Continue the loop
//   }

//   updatePositions(); // Start tracking positions
// }

// // Start tracking skill positions when the document is ready
// document.addEventListener("DOMContentLoaded", trackSkillPositions);

window.addEventListener("scroll", () => {
  let information = document.querySelector(".skillset");
  let informationTitle = document.querySelector(".skills-wrapper");
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
    distanceFromViewportBottomToInformationTop * 0.26
  }px`;
});
