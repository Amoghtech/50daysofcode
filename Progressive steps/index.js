const progress = document.getElementById("progress");
const prev = document.getElementById("pre");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
// Return nodelist

let currentactive = 1;

next.addEventListener("click", () => {
  currentactive++;
  if (currentactive > circles.length) {
    currentactive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentactive--;
  if (currentactive < 1) {
    currentactive = 1;
  }

  update();
});






function update() {
  circles.forEach((circle, indx) => {
    if (indx < currentactive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const actives = document.querySelectorAll('.active');
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%"; //As width is always in %, like 5%

  if (currentactive === 1) {
    prev.disabled = true;
  } else if (currentactive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
