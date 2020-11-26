window.Vue = require("vue");

import App from "./components/App";

Vue.config.productionTip = false;

const app = new Vue({
    ...App,
});

// toggle nightmode
document.getElementById("nightmode").addEventListener("click", function() {
    document.body.classList.toggle("nightmode");
    var moon = document.getElementById("moon-icon");
    moon.classList.toggle("far");
    moon.classList.toggle("fas");
    moon.classList.toggle("moon-white");
});
