document.addEventListener('turbolinks:load', () => {
  const clickVector = document.querySelectorAll(".vector");
  clickVector.forEach(arrow => {
    arrow.addEventListener('click', function() {
      arrow.classList.toggle("vector-up");
      arrow.classList.toggle("marginb-desktop");
      arrow.nextSibling.nextSibling.classList.toggle("no-display");
    });
  })
})
