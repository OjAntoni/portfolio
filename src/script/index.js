const container = document.querySelector(".promo");
const movingElement = document.querySelector(".promo__text");
const movementBound = 60; // The element can move 50px in any direction from its starting position

// Initialize the element's position to the center of the container
let startX = container.offsetWidth / 2;
let startY = container.offsetHeight / 2 - 50;
let targetX = startX;
let targetY = startY;

let lastMouseX = null;
let lastMouseY = null;
let currentX = startX;
let currentY = startY;

movingElement.style.left = startX + "px";
movingElement.style.top = startY + "px";

container.addEventListener("mousemove", function (e) {
  // Mouse position relative to the container
  let mouseX = e.clientX - container.getBoundingClientRect().left;
  let mouseY = e.clientY - container.getBoundingClientRect().top;

  if (lastMouseX !== null && lastMouseY !== null) {
    let dx = mouseX - lastMouseX;
    let dy = mouseY - lastMouseY;

    // Calculate new target position, applying bounds
    targetX = Math.max(
      Math.min(currentX + dx, startX + movementBound),
      startX - movementBound
    );
    targetY = Math.max(
      Math.min(currentY + dy, startY + movementBound),
      startY - movementBound
    );
  }

  // Update last mouse positions
  lastMouseX = mouseX;
  lastMouseY = mouseY;
});

function updatePosition() {
  // Smoothly update the element's position towards the target
  currentX += (targetX - currentX) * 0.03;
  currentY += (targetY - currentY) * 0.03;

  // Apply the updated position
  movingElement.style.left = currentX + "px";
  movingElement.style.top = currentY + "px";

  requestAnimationFrame(updatePosition);
}

// Start updating the position
updatePosition();

function centerMovableDiv() {
  // Calculate the new position for movableDiv to be centered
  const newX = container.offsetWidth / 2;
  const newY = container.offsetHeight / 2 - 50;
  console.log(newX, newY);
  startX = newX;
  startY = newY;
  targetX = newX;
  targetY = newY;
  currentX = newX;
  currentY = newY;
  // Update movableDiv's position
  movingElement.style.left = `${newX}px`;
  movingElement.style.top = `${newY}px`;
}

window.addEventListener("resize", centerMovableDiv);
