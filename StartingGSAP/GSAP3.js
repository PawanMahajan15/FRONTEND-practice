gsap.to("#page2 img",{
    width:"100%",
    duration:2,
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:5,
        pin:true
    }
})
gsap.to("#page5 h1",{
    Transform:"translateX(-165%)",
    scrollTrigger:{
        trigger:"#page5",
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -100%",
        scrub:5,
        pin:true
    }
})