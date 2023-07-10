
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
})