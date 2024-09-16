var cursorDot = document.querySelector(".cursor-dot");
var cursorOutline = document.querySelector(".cursor-outline");

var mouseX = 0;
var mouseY = 0;
var cursorX = 0;
var cursorY = 0;
var speed = 0.1; 

function updateCursor() {
    var deltaX = mouseX - cursorX;
    var deltaY = mouseY - cursorY;

    cursorX += deltaX * speed;
    cursorY += deltaY * speed;

    cursorDot.style.left = `${cursorX}px`;
    cursorDot.style.top = `${cursorY}px`;

    cursorOutline.style.left = `${cursorX}px`;
    cursorOutline.style.top = `${cursorY}px`;

    requestAnimationFrame(updateCursor);
}

window.addEventListener("mousemove", function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

requestAnimationFrame(updateCursor);

document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links a'); // Semua tautan di dalam nav

    // Toggle menu saat burger diklik
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Tutup menu saat tautan diklik
    navItems.forEach(function(item) {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
});