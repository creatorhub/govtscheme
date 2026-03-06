// GovtScheme Portal Main JavaScript

document.addEventListener("DOMContentLoaded", function () {


// -----------------------------
// BACK BUTTON SYSTEM
// -----------------------------

const backBtn = document.getElementById("backBtn");

if (backBtn) {

backBtn.addEventListener("click", function () {

window.history.back();

});

}


// -----------------------------
// LIVE SEARCH FILTER SYSTEM
// -----------------------------

const searchInput = document.getElementById("searchInput");

if (searchInput) {

searchInput.addEventListener("keyup", function () {

let filter = searchInput.value.toLowerCase();

let posts = document.querySelectorAll(".post-card");

posts.forEach(function (post) {

let text = post.innerText.toLowerCase();

if (text.includes(filter)) {

post.style.display = "block";

} else {

post.style.display = "none";

}

});

});

}


// -----------------------------
// SMOOTH SCROLL SYSTEM
// -----------------------------

const links = document.querySelectorAll("a[href^='#']");

links.forEach(function(link){

link.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior: "smooth"

});

}

});

});


// -----------------------------
// SIMPLE PAGE LOAD MESSAGE
// -----------------------------

console.log("GovtScheme Portal Loaded Successfully");


});
