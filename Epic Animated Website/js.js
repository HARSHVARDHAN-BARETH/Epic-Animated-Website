const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

gsap.from(".nlink", {
       stagger: .1,
       y: 10,
       duration: 2,
       ease: Power3,
       opacity: 0
})

Shery.textAnimate(".headings h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

  gsap.from(".anim2", {
    y: 30,
    stagger: .2,
    duration: 1,
    ease: Power2,
    opacity: 0
})



Shery.imageEffect(".imageantext img", {
    style: 2, //Select Style
    debug: true, // Debug Panel
    config: {
      /* Config made from debug panel */
    },
    preset: "./presets/wigglewobble.json",
  });



  gsap.from(".col h1",{
    opacity:0,
    duration:2
  })