//your JS code here. If required.
// Get the element with id "level"
let element = document.getElementById("level");

// Initialize level count
let level = 0;

// Traverse up the DOM tree, counting each parent node until reaching the <html> element
while (element) {
  level++;
  element = element.parentElement;
}

// Show the result in the required format
alert("The level of the element is: " + level);