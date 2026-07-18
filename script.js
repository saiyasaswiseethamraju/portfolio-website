// ===============================
// Typing Animation
// ===============================

const words = [
    "Python Developer",
    "Web Developer",
    "AI Enthusiast",
    "CSE Student"
];

let i = 0;
let j = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const current = words[i];

    if(!deleting){

        typing.textContent = current.substring(0,j++);
    }
    else{

        typing.textContent = current.substring(0,j--);
    }

    let speed = deleting ? 60 : 120;

    if(!deleting && j === current.length + 1){

        deleting = true;
        speed = 1500;

    }

    if(deleting && j === 0){

        deleting = false;
        i++;

        if(i >= words.length){

            i = 0;

        }

    }

    setTimeout(typeEffect,speed);

}

typeEffect();


// ===============================
// Page Navigation
// ===============================

const links = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");

links.forEach(link=>{

    link.addEventListener("click",()=>{

        const page = link.dataset.page;

        pages.forEach(section=>{

            section.classList.remove("active");

        });

        document.getElementById(page).classList.add("active");

        links.forEach(l=>l.classList.remove("active"));

        link.classList.add("active");

    });

});


// ===============================
// Projects Button
// ===============================

const projectBtn = document.getElementById("projectBtn");

if(projectBtn){

projectBtn.addEventListener("click",function(e){

e.preventDefault();

pages.forEach(page=>{

page.classList.remove("active");

});

document.getElementById("projects").classList.add("active");

links.forEach(link=>{

link.classList.remove("active");

});

document.querySelector('[data-page="projects"]').classList.add("active");

});

}


// ===============================
// Contact Form
// ===============================

const form = document.querySelector("form");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank you! I'll get back to you soon.");

form.reset();

});

}


// ===============================
// ESC Key → Home Page
// ===============================

document.addEventListener("keydown",function(e){

if(e.key==="Escape"){

pages.forEach(page=>{

page.classList.remove("active");

});

document.getElementById("home").classList.add("active");

links.forEach(link=>{

link.classList.remove("active");

});

document.querySelector('[data-page="home"]').classList.add("active");

}

});const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});