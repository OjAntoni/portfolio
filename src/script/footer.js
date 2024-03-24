let scrollHeight = document.documentElement.scrollHeight;

const recalcHeight = () => {
  scrollHeight = document.documentElement.scrollHeight;
  let footer = document.querySelector(".footer");
  footer.style.top = scrollHeight;
};

document.addEventListener("DOMContentLoaded", recalcHeight);
window.addEventListener("resize", recalcHeight);
document.addEventListener("fullscreenchange", recalcHeight);
document.addEventListener("webkitfullscreenchange", recalcHeight);
document.addEventListener("mozfullscreenchange", recalcHeight);
document.addEventListener("MSFullscreenChange", recalcHeight);
