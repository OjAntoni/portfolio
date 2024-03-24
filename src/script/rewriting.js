const textElement = document.querySelector(".promo__typing");
const texts = ["Java Developer", "Fullstack Developer", "React Developer"];
let wordIndex = 0; // Index for the texts array
let index = 0; // Tracks the current position for typing
let eraseIndex; // Initialized dynamically

function typeCharacter() {
  if (index <= texts[wordIndex].length) {
    textElement.innerHTML =
      texts[wordIndex].substring(0, index) + '<span class="caret">|</span>';
    index++;
  }

  if (index > texts[wordIndex].length) {
    clearInterval(typingInterval);
    setTimeout(startErasing, 300); // Wait a bit before starting to erase
  }
}

function eraseCharacter() {
  if (eraseIndex >= 0) {
    textElement.innerHTML =
      texts[wordIndex].substring(0, eraseIndex) +
      '<span class="caret">|</span>';
    eraseIndex--;
  }

  if (eraseIndex < 0) {
    clearInterval(erasingInterval);
    wordIndex = (wordIndex + 1) % texts.length; // Move to the next word, looping back if at the end
    index = 0; // Reset index for typing the next word
    eraseIndex = texts[wordIndex].length; // Reset eraseIndex based on the next word
    setTimeout(() => {
      typingInterval = setInterval(typeCharacter, 100);
    }, 200); // Brief pause before typing next
  }
}

// Initialize eraseIndex and start typing out the first text
eraseIndex = texts[wordIndex].length;
let typingInterval = setInterval(typeCharacter, 60);
let erasingInterval;

function startErasing() {
  erasingInterval = setInterval(eraseCharacter, 20); // Adjust the erasing speed as needed
}
