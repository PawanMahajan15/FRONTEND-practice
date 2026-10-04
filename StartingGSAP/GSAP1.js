var tl=gsap.timeline(1)
tl.from("#nav1 h3",{
y:-50,
duration: 1,
 delay:0.8,
 opacity: 0,
 stagger:0.3
})
tl.from("#center h1",{
x:-500,
duration:0.8,
 opacity: 0,
 stagger:0.5
})
tl.from("#center img",{
    x:200,
    rotate: 90,
    duration: 0.4,
    opacity: 0,
    stagger:0.5
})