
function list() {
    const list = document.querySelector(".list");
    const grocery = document.querySelector(".grocery");
    const groceryValue = grocery.value;
    const item = document.createElement("li");
    item.classList.add("item");
    item.textContent = groceryValue;
    list.appendChild(item);
    grocery.value = "";
}

function add() {
    const addBtn = document.querySelector(".addBtn");
    addBtn.addEventListener("click", list);

}

add();