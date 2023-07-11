
let tl = gsap.timeline();

tl.from("nav a.navLogo ,nav .navMenu li",{
    y:-100,
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger:0.3,
    ease:Expo.easeInOut
})
tl.from(" .heroSection h1 ",{
    y:100,
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger:0.3,
    zIndex:0
})
tl.from(".heroBtnGroup .btn ",{
    x:100,
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger:0.3,
})
tl.from(".heroBtnGroup span ",{
    y:100,
    opacity:0,
    duration:0.5,
    delay:0.5,
    stagger:0.3,
})

tl.from(".ScrollDown",{
    scale:0,
    opacity:0,
})
tl.to(".ScrollDown",{
    y:20,
    repeat:-1,
    yoyo:true,
    scale:0.8
});

let heroSection = document.querySelector('.heroSection');
let img = heroSection.querySelector('img');
heroSection.addEventListener('mousemove',(e)=>{
    let x = e.x*0.02;
    let y = e.x*0.02;
    img.style.left=1-x+"px";
    img.style.top=1-y+"px";
})

let navToggler = document.querySelector('nav .toggler');
let navMenu = document.querySelector('nav .navMenu');
navToggler.addEventListener('click',()=>{
    navMenu.classList.toggle('showNav');
    let closeIcon = navToggler.querySelector('.fa-xmark');
    closeIcon.classList.toggle('dipslayNone');
    let barIcon = navToggler.querySelector('.fa-bars');
    barIcon.classList.toggle('dipslayNone');
})