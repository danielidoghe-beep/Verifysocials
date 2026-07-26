// ===============================
// HOME PAGE JAVASCRIPT
// Verifystacklogs
// ===============================

// Menu Button

const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {

    alert("Sidebar coming soon.");

});



// ===============================
// Search
// ===============================

const searchInput = document.querySelector(".search-box input");

const searchBtn = document.querySelector(".search-box button");

searchBtn.addEventListener("click", () => {

    const keyword = searchInput.value.trim();

    if(keyword === ""){

        searchInput.focus();

        return;

    }

    console.log("Searching:", keyword);

});



// Press Enter

searchInput.addEventListener("keypress", function(e){

    if(e.key === "Enter"){

        searchBtn.click();

    }

});



// ===============================
// Floating Telegram Button
// ===============================

const telegram = document.querySelector(".telegram");

telegram.addEventListener("click", function(e){

    e.preventDefault();

    window.open("https://t.me/", "_blank");

});



// ===============================
// Smooth Animation
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(window.scrollY > 30){

        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.06)";

    }else{

        header.style.boxShadow = "none";

    }

});



// ===============================
// Ready
// ===============================

console.log("Verifystacklogs Loaded Successfully");
