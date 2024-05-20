const iconToggle = document.querySelector('.toggle-icon')
const navbarMenu = document.querySelector('.menu')
const menuLinks = document.querySelectorAll('.menu-link')
const iconClose = document.querySelector('.close-icon')

iconToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
} );

iconClose.addEventListener('click', () => {
    navbarMenu.classList.remove('active');
});

menuLinks.forEach((menulink) => {
    menulink.addEventListener('click', () => {
        navbarMenu.classList.remove('active');
    })
})

//Change background header
function scrollHeader() {
    const header = document.getElementById('header');
    this.scrollY >= 20 ? header.classList.add('active') : header.classList.remove('active');
} 

window.addEventListener('scroll', scrollHeader);

/* hero typed effect */
const typed = document.querySelector('.typed');

if(typed) {
    let typed_strings = typed .getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed ('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}

// resume section
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 120;

        let sectionId = section.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.menu a[href *=' + sectionId + ']').classList.remove('active-link'); 
        }
    })
}

window.addEventListener('scroll', scrollActive);

// resume scroll
const pages = document.querySelectorAll('.page');
const resume = document.querySelector('.resume');

function resumeActive() {
    const scrollY = window.pageYOffset;

    pages.forEach(page => {
        const sectionHeight = page.offsetHeight;
        const sectionTop = page.offsetTop;

        let sectionId = page.getAttribute('id');
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.resume-tabs a[href *=' + sectionId + ']').classList.add('current');
        } else {
            document.querySelector('.resume-tabs a[href *=' + sectionId + ']').classList.remove('current');
        }
    })
}
window.addEventListener('scroll', resumeActive);

// Portofolio
let filterItems = document.querySelectorAll('.portofolio-filters li');

function activePortofolio() {
    filterItems.forEach(el => {
        el.classList.remove('filter-active');
        this.classList.add('filter-active')
    })
}

filterItems.forEach(el => {
    el.addEventListener('click', activePortofolio);
})

// ===== mixitup filter portofolio\

let mixerPortofolio = mixitup('.portofolio-wrap-container', {
    selectors: {
        target: '.portofolio-item'
    },
    animation: {
        duration: 300
    }
});

// services section
let modalBtns = document.querySelectorAll('.services-button'),
    modalViews = document.querySelectorAll(".services-modal"),
    modalClose = document.querySelectorAll('.modal-close-icon');


let modal = function (modalClick){
    modalViews[modalClick].classList.add('active-modal');
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach(el => {
    el.addEventListener('click', () =>{
        modalViews.forEach(modalView => {
            modalView.classList.remove('active-modal')
        })
    })
})