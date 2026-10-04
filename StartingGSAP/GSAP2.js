gsap.from("#page1 #circle",{
    scale:0,
    duration:2,
    delay:0.2,
    rotate:720,
})
gsap.from("#page2 #circle",{
    scale:0,
    duration:2,
    delay:0.2,
    rotate:720,
    scrollTrigger:"#page2 #circle"
})
gsap.from("#page3 #circle",{
    scale:0,
    duration:2,
    delay:0.2,
    rotate:720,
    scrollTrigger:{
        trigger:"#page3 #circle",
        scroll:"body",
        markers:true,
        start:"top 70%",
        end:"top 50%",
        scrub:true
    }
})