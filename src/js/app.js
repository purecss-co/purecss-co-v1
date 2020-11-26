window.Vue = require("vue");

import App from "./components/App";

Vue.config.productionTip = false;

const app = new Vue({
    ...App,
});

// toggle nightmode
function toggleNightMode() {
    document.body.classList.toggle("nightmode");
    const moon = document.getElementById("moon-icon");
    moon.classList.toggle("far");
    moon.classList.toggle("fas");
    moon.classList.toggle("moon-white");
}

// check if set nightmode
document.addEventListener("DOMContentLoaded", function(event) {
    const toggle = localStorage.getItem("toggled");
    if (toggle == "nightmode") {
        toggleNightMode();
    }
});

// handle nightmode button
document.getElementById("nightmode").addEventListener("click", function() {
    const toggle = localStorage.getItem("toggled");
    localStorage.setItem("toggled", toggle == "nightmode" ? "" : "nightmode");

    toggleNightMode();
});
