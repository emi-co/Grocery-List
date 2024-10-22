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
  checkbox.id = "checkbox-" + counter; //Randomizes the ID

  var inputValue = document.getElementById("input").value;
  var label = document.createElement("label");
  label.htmlFor = checkbox.id;
  var span = document.createElement("span");
  span.textContent = inputValue;

  // label.appendChild(document.createTextNode(inputValue));

  var li = document.createElement("li"); //make checkboxes list items
  li.appendChild(checkbox);
  li.appendChild(span);

  document.getElementById("list").append(li);

  //strike-through

  checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
      span.style.textDecoration = "line-through";
    } else {
      span.style.textDecoration = "none";
    }
  });

  //clear
  document.getElementById(input).value = "";
}

//toggle viewPurchased
