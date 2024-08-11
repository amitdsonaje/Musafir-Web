// Function to set active link
function setActiveLink(element) {
    // Remove 'active' class from all links
    var links = document.getElementsByClassName('menu1');
    for (var i = 0; i < links.length; i++) {
        links[i].classList.remove('active');
    }

    // Add 'active' class to the clicked link
    element.classList.add('active');
}

//SlideShow
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

// Initial setup
showSlides();

// Next/previous controls
prevBtn.addEventListener("click", () => {
slideIndex = (slideIndex - 1 + slides.length) % slides.length;
showSlides();
});

nextBtn.addEventListener("click", () => {
slideIndex = (slideIndex + 1) % slides.length;
showSlides();
});

// Dot controls
dots.forEach((dot, index) => {
dot.addEventListener("click", () => {
slideIndex = index;
showSlides();
});
});

// Automatic slideshow
setInterval(() => {
slideIndex = (slideIndex + 1) % slides.length;
showSlides();
}, 3000); // Change slide every 5 seconds (adjust as needed)

function showSlides() {
slides.forEach(slide => slide.style.display = "none");
dots.forEach(dot => dot.classList.remove("active"));

slides[slideIndex].style.display = "flex";
dots[slideIndex].classList.add("active");
}

//pop-up 
function popup() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
}

// Get the modal
const contactUs = document.getElementById("contactUs");

// Get the button that opens the modal
const openFormBtn = document.getElementById("openFormBtn");

// Get the <span> element that closes the modal
const closeFormBtn = document.getElementById("closeFormBtn");

// When the user clicks the button, open the modal 
openFormBtn.onclick = function() {
    contactUs.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeFormBtn.onclick = function() {
    contactUs.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == contactUs) {
        contactUs.style.display = "none";
    }
}
