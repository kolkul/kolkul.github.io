const lineBlock = document.querySelector(".loop-line-block");
const windowWidth = window.innerWidth;

const setAnimationDuration = (partOfWindow) => {
  const getLineBoxes = lineBlock.querySelectorAll(".loop-line__box");

  getLineBoxes.forEach((box) => {
    box.setAttribute("style", `animation-duration: ${10 / partOfWindow}s`);
  });
};

const prepareLine = () => {
  const getLineBox = lineBlock.querySelector(".loop-line__box");

  const getLineBoxWidth = getLineBox.clientWidth || getLineBox.offsetWidth;

  const getWindowWidth = windowWidth * 0.2 + windowWidth;

  const getNumberLineBox = getWindowWidth / getLineBoxWidth;
  const getFilteredNumber = Math.ceil(getNumberLineBox);

  let htmlLineBox = ``;

  for (let i = 0; i < getFilteredNumber * 2; i++) {
    htmlLineBox += getLineBox.outerHTML;
  }

  lineBlock.innerHTML = htmlLineBox;

  setAnimationDuration(getNumberLineBox);
};

// Infinite line initialization

window.addEventListener("load", () => {
  prepareLine();
});

// Agency slider

let agencySlider;
let init = false;
const agencySliderSelector = ".agency-section__slider";

const initAgencySlider = () => {
  if (!document.querySelectorAll(agencySliderSelector).length) return;

  const breakpoint = window.matchMedia("(min-width: 1401px)");

  if (breakpoint.matches) {
    if (!init) return;

    agencySlider.destroy();

    init = false;
  } else {
    if (init) return;

    agencySlider = new Swiper(agencySliderSelector, {
      speed: 300,

      // Navigation arrows
      navigation: {
        prevEl: ".agency-section__slider-arrow.-left",
        nextEl: ".agency-section__slider-arrow.-right",
      },

      breakpoints: {
        // when window width is >= 320px
        0: {
          slidesPerView: "auto",
          spaceBetween: 8,
        },
        760: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1025: {
          slidesPerView: 2,
          spaceBetween: 32,
        },
      },
    });

    init = true;
  }
};

window.addEventListener("load", initAgencySlider);

window.addEventListener("resize", initAgencySlider);

// Expand description

const getDescButton = document.querySelector(
  ".sport-section__description-button"
);

let opened = false;

getDescButton.addEventListener("click", function () {
  const getParentBox = this.closest(".sport-section__description-box");
  const getDesc = getParentBox.querySelector(".sport-section__description");
  const getDescContent = getDesc.querySelector(
    ".sport-section__description-content"
  );

  if (!opened) {
    opened = true;

    getDescContent.setAttribute("style", `-webkit-line-clamp: unset;`);

    const getDescContentHeight = getDescContent.offsetHeight;

    this.classList.add("-opened");

    getDesc.setAttribute("style", `height: ${getDescContentHeight}px;`);
  } else {
    opened = false;

    const getDescContentHeight = getDescContent.offsetHeight;

    this.classList.remove("-opened");

    getDesc.setAttribute("style", `height: ${getDescContentHeight}px;`);

    getDesc.offsetWidth;

    getDesc.style = "";
  }
});

document
  .querySelector(".sport-section__description")
  .addEventListener("transitionend", function () {
    if (opened) {
      this.setAttribute("style", `height: auto;`);
    } else {
      this.querySelector(".sport-section__description-content").style = "";
    }
  });

// Videos animation

const getVideoRange = document.querySelector("#videosRange");
const getClippedVideo = document.querySelector("#clippedVideo");
const getClippedLine = document.querySelector("#clippedLine");

const setClipValue = (value) => {
  let spaceNumber = 276;

  const desktopBreakpoint = window.matchMedia(
    "(min-width: 1025px) and (max-width: 1200px)"
  );
  const tabletBreakpoint = window.matchMedia(
    "(min-width: 760px) and (max-width: 1024px)"
  );
  const mobileBreakpoint = window.matchMedia("(max-width: 759px)");

  if (desktopBreakpoint.matches) {
    spaceNumber = 246;
    getVideoRange.setAttribute("max", "70");
  } else if (tabletBreakpoint.matches) {
    spaceNumber = 134;
    getVideoRange.setAttribute("max", "77");
  } else if (mobileBreakpoint.matches) {
    spaceNumber = 57;
  }

  const getValueNumber = Number(value);

  getClippedVideo.style = `clip-path: polygon(0 0, calc(${getValueNumber}% + ${spaceNumber}px) 0, ${getValueNumber}% 100%, 0 100%)`;

  getClippedLine.style.left = `calc(${getValueNumber}% + ${spaceNumber / 2}px)`;
};

getVideoRange.oninput = (input) => {
  const getRangeValue = getVideoRange.value;

  setClipValue(getRangeValue);
};

window.addEventListener("load", () => {
  const getRangeValue = getVideoRange.value;

  setClipValue(getRangeValue);
});

// Player slider init

document.addEventListener("DOMContentLoaded", () => {
  const getSlider = ".players-section__slider";

  if (!document.querySelectorAll(getSlider).length) return;

  const playerSwiper = new Swiper(getSlider, {
    slidesPerView: "auto",

    speed: 400,
    spaceBetween: 16,

    breakpoints: {
      0: { slidesPerGroup: 1 },
      760: { slidesPerGroup: 2 },
      1024: { slidesPerGroup: 3 },
    },

    // Navigation arrows
    navigation: {
      prevEl: ".players-section__slider-arrow.-left",
      nextEl: ".players-section__slider-arrow.-right",
    },
  });
});

// Accordion functions

const getAccordionButton = document.querySelectorAll(".accordion__button");

const accordionButtonFunc = (button, content, contentBox) => {
  const getContentHeight = content.offsetHeight;

  contentBox.style.height = `${getContentHeight}px`;

  if (button.classList.contains("-active")) {
    button.classList.remove("-active");

    //  Lifehack delay 0.01s
    contentBox.offsetWidth;
    //

    contentBox.style.height = 0;
  } else {
    button.classList.add("-active");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (!getAccordionButton.length) return;

  getAccordionButton.forEach((button) => {
    const getParent = button.closest(".accordion");
    const getContent = getParent.querySelector(".accordion__content");
    const getContentBox = getParent.querySelector(".accordion__content-box");

    button.onclick = () =>
      accordionButtonFunc(button, getContent, getContentBox);

    getContentBox.addEventListener("transitionend", (e) => {
      if (button.classList.contains("-active")) {
        e.target.style.height = "auto";
      }
    });
  });
});

// Validators

const checkFilledInput = (input) => {
  const getInputValue = input.value;

  if (!getInputValue.length) {
    const getInputBox = input.closest(".input-box");

    getInputBox.classList.add("-error");
  }
};

function emailValidator(input) {
  const value = input.value.trim();
  const reg =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;

  const emailValidation = reg.test(String(value).toLowerCase());

  if (!emailValidation) {
    const getInputBox = input.closest(".input-box");

    getInputBox.classList.add("-error");
  }
}

// Input only numbers for phone number inputs

document
  .querySelector('input[name="phone"]')
  .addEventListener("input", function (e) {
    this.value = this.value.replace(/[^\d.]/g, "");
  });

// Clear fields

const clearFormFields = (inputs) => {
  inputs.forEach((input) => {
    input.value = "";
  });
};

// Form submitting

const getForms = document.querySelectorAll(".form form");

getForms.forEach((form) => {
  form.onsubmit = (e) => {
    e.preventDefault();

    let formValid = true;

    const getFormContainer = e.target.querySelector(
      ".contact-section__form-container"
    );
    const getSubmitButton = e.target.querySelector('button[type="submit"]');
    const getInputBoxes = e.target.querySelectorAll(".input-box");

    getInputBoxes.forEach((el) => {
      el.classList.remove("-error");
    });

    const nameInput = e.target.name;
    const emailInput = e.target.email;
    const topicInput = e.target.topic;
    const phoneInput = e.target.phone;
    const messageInput = e.target.message;

    checkFilledInput(nameInput);
    emailValidator(emailInput);
    checkFilledInput(topicInput);
    checkFilledInput(messageInput);

    getInputBoxes.forEach((el) => {
      if (el.classList.contains("-error")) formValid = false;
    });

    if (!formValid) return;

    const nameInputValue = nameInput.value;
    const emailInputValue = emailInput.value;
    const topicInputValue = topicInput.value;
    const phoneInputValue = phoneInput.value || `<i>not provided</i>`;
    const messageInputValue = messageInput.value;

    // Sending Telegram message

    const tgMessageBody = `<b>Name:</b> ${nameInputValue}
<b>Email:</b> ${emailInputValue}
<b>Topic:</b> ${topicInputValue}
<b>Phone:</b> ${phoneInputValue}
<b>Message:</b> ${messageInputValue}`;

    const tgBotToken = "6721442101:AAGpqqWgtcaVrhjR7a9A6TMLapmEpSPn3H0";
    const tgChanelName = "@phenomen_application_chanel";
    const tgRequestUrl = new URL(
      `https://api.telegram.org/bot${tgBotToken}/sendMessage`
    );

    tgRequestUrl.searchParams.set("chat_id", tgChanelName);
    tgRequestUrl.searchParams.set("text", tgMessageBody);
    tgRequestUrl.searchParams.set("parse_mode", "html");

    const tgRequest = new XMLHttpRequest();
    tgRequest.open("GET", tgRequestUrl, true);
    tgRequest.setRequestHeader("Content-Type", "application/json");
    tgRequest.send();

    getSubmitButton.classList.add("-sending");

    tgRequest.onload = () => {
      console.log("Successfully");

      clearFormFields([
        nameInput,
        emailInput,
        topicInput,
        phoneInput,
        messageInput,
      ]);

      getFormContainer.classList.add("-sent");

      getSubmitButton.classList.remove("-sending");
      getSubmitButton.classList.add("-sent");
    };

    tgRequest.onerror = () => {
      console.log(tgRequest.status);
      getSubmitButton.classList.remove("-sending");
    };
  };
});

// Remove ERROR class function

const removeErrorClass = (field) => {
  const getFieldBox = field.closest(".input-box");

  getFieldBox.classList.remove("-error");
};

const getInputs = document.querySelectorAll("input");

getInputs.forEach((input) => {
  if (!input.closest("form")) return;

  input.oninput = function () {
    removeErrorClass(this);
  };
});

// Textarea adaptive

function setTextareaAdaptiveHeight(e) {
  e.style.height = "0";
  e.style.height = `${e.scrollHeight + 2}px`;
}

function updateTextareaAdaptiveHeight() {
  const getTextareas = document.querySelectorAll("textarea");

  getTextareas.forEach((textarea) => {
    textarea.dispatchEvent(new Event("input"));
  });
}

document.querySelectorAll("textarea").forEach((textarea) => {
  textarea.oninput = function () {
    removeErrorClass(this);
    setTextareaAdaptiveHeight(this);
  };
});

window.addEventListener("resize", updateTextareaAdaptiveHeight);

// Contact us - Animation

const getAnimationBox = document.querySelector(
  ".contact-section__animation-box-bg"
);

getAnimationBox.onmouseenter = function () {
  const getParent = this.closest(".contact-section__animation-box");

  getParent.classList.add("-animation");
};

getAnimationBox.onmouseleave = function () {
  const getParent = this.closest(".contact-section__animation-box");

  getParent.classList.remove("-animation");
};

// Dropdown functions

const getDropdownButton = document.querySelector(".dropdown__button");

getDropdownButton.addEventListener("click", function () {
  const getDropdown = this.closest(".dropdown");
  const getDropdownList = getDropdown.querySelector(".dropdown__list");

  if (getDropdown.classList.contains("-opened")) {
    getDropdown.classList.remove("-opened");
  } else {
    getDropdown.classList.add("-opened");
  }
});

// Mobile menu adjustment

const getMenuButton = document.querySelector(".header__burger-button");

getMenuButton.addEventListener("click", function () {
  const getMenu = document.querySelector(".header__menu");

  if (this.classList.contains("-opened")) {
    getMenu.classList.remove("-opened");
    this.classList.remove("-opened");
  } else {
    getMenu.classList.add("-opened");
    this.classList.add("-opened");
  }
});

// Click outside event listener adjustments

window.addEventListener("click", function () {
  const getDropdown = getDropdownButton.closest(".dropdown");

  const getMenuButton = document.querySelector(".header__burger-button");
  const getMenu = document.querySelector(".header__menu");

  if (getDropdown.classList.contains("-opened")) {
    getDropdown.classList.remove("-opened");
  }

  if (getMenu.classList.contains("-opened")) {
    getMenuButton.classList.remove("-opened");
    getMenu.classList.remove("-opened");
  }
});

document.querySelector(".dropdown").addEventListener("click", function (event) {
  event.stopPropagation();
});

document.querySelector(".header").addEventListener("click", function (event) {
  event.stopPropagation();
});

// Anchor link

const scrollLinkMinSpeed = 600;
const scrollLinkSpeedValue = 2;

const scrollLinkDefaultOffset = {
  default: {
    1024: 138,
  },
};
const scrollLinkCustomOffset = {
  default: {
    1024: 138,
  },
};

const scrollLinkDefaultOffsetToTop = false;
const scrollLinkCustomOffsetToTop = false;

const scrollLinkDefaultOffsetToBottom = false;
const scrollLinkCustomOffsetToBottom = false;

// Anchor link - logic

const getLinks = document.querySelectorAll("a");

getLinks.forEach(function (el) {
  el.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    const to = getElementByHref(href);

    if (to) {
      e.preventDefault();

      const position = getScrollLinkFinalPosition(to);

      if (position === window.scrollY) return;

      if (this.closest(".header__menu")) {
        const getHeader = this.closest(".header");

        this.closest(".header__menu").classList.remove("-opened");
        getHeader
          .querySelector(".header__burger-button")
          .classList.remove("-opened");
      }

      // const speed = getScrollSpeedByPosition(position);

      window.scrollTo({ top: position, behavior: "smooth" });
    }
  });
});

// Anchor link - helpers

function getElementByHref(href) {
  let hash = false;

  if (href.indexOf("#") === 0) {
    hash = href;
  } else {
    const url = new URL(href);

    if (
      url.host === window.location.host &&
      url.pathname === window.location.pathname
    ) {
      hash = url.hash ? url.hash : false;
    }
  }

  if (hash == "#") {
    hash = false;
  } else {
    hash = document.querySelector(hash);
  }

  return hash ? hash : false;
}

function getScrollLinkDefaultValue(value, hasBg) {
  if (value === false) return false;

  let returnValue = false;

  if (typeof value === "object") {
    let objectKey;

    if (hasBg && typeof value["hasBg"] !== "undefined") {
      objectKey = value["hasBg"];
    } else {
      objectKey = value["default"];
    }

    if (typeof objectKey === "string" || typeof objectKey === "number") {
      returnValue = objectKey;
    } else if (typeof objectKey === "object") {
      Object.keys(objectKey).forEach((key) => {
        if (window.innerWidth > key) {
          returnValue = objectKey[key];
          return false;
        }
      });
    }
  } else {
    returnValue = value;
  }

  return returnValue;
}

function getScrollLinkPositionByParams(to, offsetValue, customOffsetValue) {
  const pageScrollHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  const maxScrollHeight = pageScrollHeight - window.innerHeight;

  const header = document.querySelector("header");
  const marginTop = parseInt(to.style.marginTop);

  let offset = 0;
  let position = to.offsetTop;

  if (offsetValue === "margin") {
    offset += marginTop;
  } else if (offsetValue === "half-margin") {
    offset += marginTop / 2;
  } else if (offsetValue === "header-height") {
    offset += header.length ? header.outerHeight() : 0;
  }

  if (customOffsetValue) {
    offset += customOffsetValue;
  }

  position -= offset;

  if (position < 0) {
    position = 0;
  } else if (position > maxScrollHeight) {
    position = maxScrollHeight;
  }

  return position;
}

function getScrollLinkFinalPosition(to) {
  const hasBg = to.classList.contains("--has-bg");

  const offsetValue = getScrollLinkDefaultValue(scrollLinkDefaultOffset, hasBg);
  const customOffsetValue = getScrollLinkDefaultValue(
    scrollLinkCustomOffset,
    hasBg
  );

  const offsetValueToTop = getScrollLinkDefaultValue(
    scrollLinkDefaultOffsetToTop,
    hasBg
  );
  const customOffsetValueToTop = getScrollLinkDefaultValue(
    scrollLinkCustomOffsetToTop,
    hasBg
  );

  const offsetValueToBottom = getScrollLinkDefaultValue(
    scrollLinkDefaultOffsetToBottom,
    hasBg
  );
  const customOffsetValueToBottom = getScrollLinkDefaultValue(
    scrollLinkCustomOffsetToBottom,
    hasBg
  );

  let position = getScrollLinkPositionByParams(
    to,
    offsetValue,
    customOffsetValue
  );

  if (
    position > window.scrollY &&
    (offsetValueToBottom || customOffsetValueToBottom)
  ) {
    if (offsetValueToBottom === false) {
      position = getScrollLinkPositionByParams(
        to,
        offsetValue,
        customOffsetValueToBottom
      );
    } else if (customOffsetValueToBottom === false) {
      position = getScrollLinkPositionByParams(
        to,
        offsetValueToBottom,
        customOffsetValue
      );
    } else {
      position = getScrollLinkPositionByParams(
        to,
        offsetValueToBottom,
        customOffsetValueToBottom
      );
    }
  }

  if (
    position < window.scrollY &&
    (offsetValueToTop || customOffsetValueToTop)
  ) {
    if (offsetValueToTop === false) {
      position = getScrollLinkPositionByParams(
        to,
        offsetValue,
        customOffsetValueToTop
      );
    } else if (customOffsetValueToTop === false) {
      position = getScrollLinkPositionByParams(
        to,
        offsetValueToTop,
        customOffsetValue
      );
    } else {
      position = getScrollLinkPositionByParams(
        to,
        offsetValueToTop,
        customOffsetValueToTop
      );
    }
  }

  return position;
}

function getScrollSpeedByPosition(position) {
  let speed = position * (0.001 * scrollLinkSpeedValue) * 100;

  if (speed < scrollLinkMinSpeed) {
    speed = scrollLinkMinSpeed;
  }

  return speed;
}
