import { greeting } from "./greeting.js";
import "./styles.css";
import { reservation } from "./reservations.js";
import { menu } from "./menu.js";

// console.log(greeting);

// reservations button
const reservationButton = document.querySelector("#reservations");
reservationButton.addEventListener("click", reservation);

//menu button
const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", menu);
