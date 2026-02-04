export function reservation(event) {
  const content = document.querySelector("#content");
  content.innerHTML = "";

  const p = document.createElement("p");
  p.innerText =
    "There are absolutely no reservations available for the Pickle Factory. The fact that you thought you could reserve a spot here is a bit ridiculous to be honest. It's almost as if the developer just wanted to create an extra button. ";
  content.appendChild(p);
  console.log("hello reservation");
}
