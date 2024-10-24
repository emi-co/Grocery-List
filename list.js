
function list() {
    const list = document.querySelector(".list");
    const grocery = document.querySelector(".grocery");
    const groceryValue = grocery.value;
    const item = document.createElement("button");
    item.classList.add("item");
    item.textContent = groceryValue;
    list.appendChild(item);
    grocery.value = "";
    item.addEventListener("click", () => switchToPurchased(item));
    list.appendChild(item);
    grocery.value = "";
}



// function switchToPurchased(item) {
//     const purchasedSection = document.querySelector(".Purchased");
//     item.remove();
//     item.classList.add("purchased-item");
//     purchasedSection.appendChild(item);

// }


function add() {
    const addBtn = document.querySelector(".addBtn");
    addBtn.addEventListener("click", list);

}

add();



