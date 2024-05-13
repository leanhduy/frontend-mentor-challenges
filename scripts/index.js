window.onload = () => {
  let baseDelay = 0.1;
  let delayIncrement = 0.05;
  let items = document.querySelectorAll(".card-item");
  for (let i = 0; i < items.length; i++) {
    let delay = baseDelay + i * delayIncrement;
    items[i].style.animationDelay = delay + "s";
  }
};
