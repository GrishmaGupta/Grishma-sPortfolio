// ===== Toggle icon navbar =====
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// ===== Scroll sections =====
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Active navbar link
            navLinks.forEach(link => link.classList.remove('active'));
            let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) activeLink.classList.add('active');

            // Section animation
            sec.classList.add('show-animate');
        } 
    });

    // Sticky header
    let header = document.getElementById('header');
    if (header) {
        header.classList.toggle('sticky', top > 100);
    }

    // Close mobile nav on scroll (only for small screens)
    if (window.innerWidth <= 768) {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    
    readMoreBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        const description = this.closest('.description');
        const fullText = description.querySelector('.full-text');
        const isExpanded = fullText.style.display === 'block';
        
        if (isExpanded) {
          fullText.style.display = 'none';
          this.innerHTML = 'Read More <i class="bx bx-chevron-down"></i>';
          this.classList.remove('active');
        } else {
          fullText.style.display = 'block';
          this.innerHTML = 'Read Less <i class="bx bx-chevron-down"></i>';
          this.classList.add('active');
        }
      });
    });
  });