'use strict';
    // NAVBAR HAMBURGER RESPONSIVE BUTTON((((((((((((((((((((()))))))))))))))))))))   *****
const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function(){
    // ONE WAY
    // if (links.classList.contains("show-links")) {
    //     links.classList.remove("show-links");
    // } else {
    //     links.classList.add("show-links");
    // }
    
    // THE OTHER WAY
    links.classList.toggle("show-links");
});


    // NAVBAR BUTTONS WITHOUT USING SEVERAL HTML FILES(((((((((((((())))))))))))))   *****

const homeX = document.getElementById('homex');
const aboutX = document.getElementById('aboutx');
const projectX = document.getElementById('projectx');
const contactX = document.getElementById('contactx');


links.addEventListener('click', async function(e) {
    let selected = await e.target.id;
    console.log(selected);

    (selected === "home") ? homeX.style.display = "block" : homeX.style.display = "none";
    (selected === 'about') ? aboutX.style.display = "block" : aboutX.style.display = "none";
    (selected === "project") ? projectX.style.display = 'block' : projectX.style.display = 'none';
    (selected === 'contact') ? contactX.style.display = 'block' : contactX.style.display = 'none';

});


    // THE NEXT FUNCTION I WILL CREATE((((((((((((((((((((()))))))))))))))))))))   *****
    