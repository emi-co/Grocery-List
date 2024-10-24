function list() {
  const list = document.querySelector(".list");
  const grocery = document.querySelector(".grocery");
  const groceryValue = grocery.value;
  const item = document.createElement("button");
  item.classList.add("item");
  item.textContent = groceryValue;
  list.appendChild(item);
  grocery.value = "";

  // item.addEventListener("click", () => switchToPurchased(item));
  item.addEventListener("click", () => switchList(item));
}

function switchList(item) {
  const list = document.querySelector(".list");
  const purchasedSection = document.querySelector(".Purchased");

  if (item.classList.contains("purchased-item")) {
    item.classList.remove("purchased-item");
    list.appendChild(item);
  } else {
    item.classList.add("purchased-item");
    purchasedSection.appendChild(item);
  }
}

// function switchToPurchased(item) {
//   const purchasedSection = document.querySelector(".Purchased");
//   item.remove();
//   item.classList.add("purchased-item");
//   purchasedSection.appendChild(item);
//   item.removeEventListener("click", () => switchToPurchased(item));
//   item.addEventListener("click", () => switchBack(item));
// }

// function switchBack(item) {
//   const list = document.querySelector(".list");
//   item.remove();
//   item.classList.remove("purchased-item");
//   list.appendChild(item);
//   item.removeEventListener("click", () => switchBack(item));
//   item.removeEventListener("click", () => switchToPurchased(item));
// }

function add() {
  const addBtn = document.querySelector(".addBtn");
  addBtn.addEventListener("click", list);
}

add();
