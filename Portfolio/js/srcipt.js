const typedText = document.querySelector('.animate-text');
const roles = ["Android Developer", "Web Designer", "Frontend Developer", "Tech Blogger"];
let roloeIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const current = roles[roloeIndex];
    
    if (isDeleting){
        typedText.textContent = current.substring(0, charIndex--);
    } else {
        typedText.textContent = current.substring(0, charIndex++);
    }

    let speed = isDeleting ? 60 : 100;

    if (isDeleting && charIndex === current.length) {
        speed = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex ===0) {
        isDeleting = false;
        roloeIndex = (roloeIndex + 1) % roles.length;
    }

    setTimeout(type,speed);
}

window .addEventListener("scroll", reveal);

function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 100;
        if (revealTop < windowHeight - revealPoint)
            reveals[i].classList.add("active");
        else {
            reveals[i].classList.remove("active");
        }
    }
}

document.addEventListener("DOMContentLoaded", type);