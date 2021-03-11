function displayItem() {
  // var element = document.getElementByClassName("whyus-description");
  console.log('clicked');
  alert('clicked');
  // if (element.classList.contains === "no-display") {
  //   element.classList.remove("no-display");
  // } else {
  //   element.classList.add("no-display");
  // }
}

document.addEventListener('turbolinks:load', () => {
  const clickVector = document.getElementById("button-click");
  clickVector.addEventListener('click', displayItem);
});

console.log("hola a todos")