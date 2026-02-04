import { greeting } from "./greeting.js";
import "./styles.css";
import { reservation } from "./reservations.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

// console.log(greeting);

// reservations button
const reservationButton = document.querySelector("#reservations");
reservationButton.addEventListener("click", reservation);

//menu button
const menuButton = document.querySelector("#menu");
menuButton.addEventListener("click", menu);

//about button
const aboutButton = document.querySelector("#about");
aboutButton.addEventListener("click", about);
