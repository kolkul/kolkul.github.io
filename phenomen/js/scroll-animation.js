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

var qrDecompone = function (a) {
  var angle = Math.atan2(a[1], a[0]),
    denom = Math.pow(a[0], 2) + Math.pow(a[1], 2),
    scaleX = Math.sqrt(denom),
    scaleY = (a[0] * a[3] - a[2] * a[1]) / scaleX,
    skewX = Math.atan2(a[0] * a[2] + a[1] * a[3], denom);
  return {
    angle: angle / (Math.PI / 180), // this is rotation angle in degrees
    scaleX: scaleX, // scaleX factor
    scaleY: scaleY, // scaleY factor
    skewX: skewX / (Math.PI / 180), // skewX angle degrees
    skewY: 0, // skewY angle degrees
    translateX: a[4], // translation point  x
    translateY: a[5], // translation point  y
  };
};

const setClipValue = (value) => {
  const getMinRange = getVideoRange.getAttribute("min");
  const getMaxRange = getVideoRange.getAttribute("max");
  const getNumberValue = Number(value);
  let getValueNumber;

  // if (getMinRange > getNumberValue) {
  // getValueNumber = Number(getMinRange);
  // } else if (getMaxRange < getNumberValue) {
  // getValueNumber = Number(getMaxRange);
  // } else {
  getValueNumber = getNumberValue;
  // }
  console.log(getComputedStyle(getClippedVideo).transform);

  const test = qrDecompone(getComputedStyle(getClippedVideo).transform);

  console.log(test);

  // getClippedVideo.style = `clip-path: polygon(0 0, calc(${getValueNumber}% + ${spaceNumber}px) 0, ${getValueNumber}% 100%, 0 100%)`;

  getClippedVideo.style.transform = `translateX(${getValueNumber}%) skew(-24deg, 0)`;
  getClippedVideo.querySelector(
    "video"
  ).style.transform = `translateX(-${getValueNumber}%) skew(24deg, 0)`;
  getClippedLine.style.left = `calc(${getValueNumber}%`;
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
