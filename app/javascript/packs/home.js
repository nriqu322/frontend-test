function displayItem() {
  var element = document.getElementByClassName("whyus-description");
  console.log('clicked');
  if (element.classList.contains === "no-display") {
    element.classList.remove("no-display");
  } else {
    element.classList.add("no-display");
  }
}

document.getElementsByClassName("vector").addEventListener('turblinks:load', displayItem);
