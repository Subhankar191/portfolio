// Text animation for welcome
const welcomeMessage = document.getElementById('welcome-message');
const text = "I'm SUBHANKAR DAS, a passionate web developer.";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        welcomeMessage.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

window.onload = typeWriter;

const sections = document.querySelectorAll('section');

// Function to handle fade-in and skills animation
function handleScrollAnimations() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight) {
            section.classList.add('visible');
        }
    });

    // Animate Skills Progress Bars
    const skillsSection = document.querySelector('#skills');
    const skillsPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.5;

    if (skillsPos < screenPos) {
        document.querySelectorAll('.skill-bar-fill').forEach(skill => {
            skill.style.width = skill.dataset.skillLevel;
        });
    }
}

// Add a single scroll event listener
window.addEventListener('scroll', handleScrollAnimations);

// JavaScript for smooth scrolling to sections and other interactions
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth'});
    });
});
