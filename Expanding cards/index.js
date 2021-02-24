const panels = document.querySelectorAll(
  ".panel"
); /**It gives array of elements that have that class */

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
    // class list gives list of classes
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");/*removes all active classes */
  });
}
