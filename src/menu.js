export function menu(event) {
  console.log("menu");
  const table = document.createElement("tbody");

  const tr = document.createElement("tr");

  const th1 = document.createElement("th");
  th1.innerText = "Pickle";

  const th2 = document.createElement("th");
  th2.innerText = "Price";

  tr.append(th1, th2);

  const thead = document.createElement("thead");
  thead.appendChild(tr);

  table.appendChild(thead);

  //array for items on the menu

  const menuItems = [
    { item: "Dill Pickles", price: "£4.99" },
    { item: "Pickled Chilli's", price: "£4.99" },
    { item: "Pickleback", price: "£6.99" },
    { item: "Cheese & Pickle Sandwich", price: "£9.99" },
  ];

  for (let menuItem of menuItems) {
    const menuTr = document.createElement("tr");

    //create menu item name td
    const itemTd = document.createElement("td");
    itemTd.innerText = menuItem.item;

    //create menu price td
    const priceTd = document.createElement("td");
    priceTd.innerText = menuItem.price;

    menuTr.append(itemTd, priceTd);
    table.append(menuTr);
  }

  const content = document.querySelector("#content");
  content.innerHTML = "";
  content.appendChild(table);
}
