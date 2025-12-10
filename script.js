/* script.js */

// 1. DYNAMIC PAGE TITLE (Hover Logic)
const titleElement = document.getElementById('pageTitleText');
const defaultTitle = "HOME PAGE";

function setPageTitle(title) {
    if(titleElement) {
        titleElement.innerText = title;
        titleElement.style.color = "#d32f2f";
    }
}

function resetPageTitle() {
    if(titleElement) {
        titleElement.innerText = defaultTitle;
        titleElement.style.color = "#d32f2f";
    }
}

// 2. SEARCH & LINKS
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById('searchInput');
    const boxes = document.querySelectorAll('.menu-box');
    if (searchInput) {
        searchInput.addEventListener('keyup', function(event) {
            const query = event.target.value.toLowerCase();
            boxes.forEach(box => {
                const text = box.querySelector('span').textContent.toLowerCase();
                box.style.display = text.includes(query) ? 'flex' : 'none';
            });
        });
    }
    const navLinks = document.querySelectorAll('a[href="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Coming Soon!');
        });
    });
});
