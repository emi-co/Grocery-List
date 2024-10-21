let counter = 0;

//Create New List Item
document.getElementById("Add").onclick = getNewItem;

function getNewItem() {
  counter++;

  // var li = document.createElement("li");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = "name";
  checkbox.value = "value";
  checkbox.id = "checkbox-" + counter;

  var inputValue = document.getElementById("input").value;
  var label = document.createElement("label");
  label.htmlFor = checkbox.id;
  label.appendChild(document.createTextNode(inputValue));
  var t = document.createTextNode(inputValue);
  // li.appendChild(t);
  // if (inputValue === "") {
  //   alert("Error");
  // } else {
  document.getElementById("list").appendChild(checkbox);
  document.getElementById("list").appendChild(label);

  //clear
  document.getElementById("input").value = "";
}
// document.getElementById("label").value = "";
// }

//toggle viewPurchased
