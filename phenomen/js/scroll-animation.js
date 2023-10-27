gsap.registerPlugin(ScrollTrigger);

const getAnimationItems = document.querySelectorAll(".-scroll-animation");

getAnimationItems.forEach((item) => {
  gsap.set(item, {
    y: 300,
    opacity: 0,
  });
  gsap.to(item, {
    y: 0,
    opacity: 1,

    delay: 0.2,
    duration: 0.7,

    scrollTrigger: {
      trigger: item,
      start: "top-=25% bottom",
      toggleActions: "play none none none",
    },
  });
});
