export function about(event) {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const h3 = document.createElement("h3");
  h3.innerText = "Address";

  content.append(h3);

  const addressArray = [
    "123 Gherkin Street",
    "Pickle City",
    "AB12 3CD",
    "Pickleland",
  ];

  for (let address of addressArray) {
    const p = document.createElement("p");
    p.innerText = address;
    content.append(p);
  }
}
