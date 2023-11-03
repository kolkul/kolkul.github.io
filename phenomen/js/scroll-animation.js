gsap.registerPlugin(ScrollTrigger);

// Videos animation

let spaceNumber;
const getVideoRange = document.querySelector("#videosRange");
const getClippedVideo = document.querySelector("#clippedVideo");
const getClippedLine = document.querySelector("#clippedLine");

const getSpaceNumber = () => {
  let number;

  if (desktopBreakpoint.matches) {
    number = 246;
    getVideoRange.setAttribute("max", "70");
  } else if (tabletBreakpoint.matches) {
    number = 134;
    getVideoRange.setAttribute("max", "77");
  } else if (mobileBreakpoint.matches) {
    number = 57;
  } else {
    number = 276;
  }

  spaceNumber = number;
};

document.addEventListener("DOMContentLoaded", getSpaceNumber);
window.addEventListener("resize", getSpaceNumber);

const setClipValue = (value) => {
  const getMinRange = getVideoRange.getAttribute("min");
  const getMaxRange = getVideoRange.getAttribute("max");
  const getNumberValue = Number(value);
  let getValueNumber;

  if (getMinRange > getNumberValue) {
    getValueNumber = Number(getMinRange);
  } else if (getMaxRange < getNumberValue) {
    getValueNumber = Number(getMaxRange);
  } else {
    getValueNumber = getNumberValue;
  }

  getClippedVideo.style = `clip-path: polygon(0 0, calc(${getValueNumber}% + ${spaceNumber}px) 0, ${getValueNumber}% 100%, 0 100%)`;

  getClippedLine.style.left = `calc(${getValueNumber}% + ${spaceNumber / 2}px)`;
};

getVideoRange.addEventListener("input", (input) => {
  const getRangeValue = getVideoRange.value;

  setClipValue(getRangeValue);
});

window.addEventListener("load", () => {
  const getRangeValue = getVideoRange.value;

  setClipValue(getRangeValue);
});

gsap.to(getVideoRange, {
  scrollTrigger: {
    trigger: getVideoRange,
    start: "top-=300px bottom-=10%",
    end: "bottom-=300px top+=10%",
    toggleActions: "play none none none",
    onUpdate: ({ progress }) => {
      setClipValue(progress * 100);
    },
  },
});

// Scroll animation

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
