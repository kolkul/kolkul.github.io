// // Prevent default function
//
// function preventDefault(e) {
//   e.preventDefault();
// }
//
// // Scroll lock
//
// function lockScroll() {
//   const html = document.documentElement;
//   const body = document.body;
//
//   const scrollTop = window.scrollY;
//
//   html.classList.add("-scroll-lock");
//   body.classList.add("-scroll-lock");
//
//   document.body.scrollTo(0, scrollTop);
//   html.setAttribute("data-scroll", scrollTop);
//
//   $(".--modal-scrollable-element").on("touchmove pointermove", preventDefault);
// }
//
// function unlockScroll() {
//   const html = document.documentElement;
//   const body = document.body;
//
//   const scrollPositionBeforeLock = html.getAttribute("data-scroll");
//
//   html.classList.remove("-scroll-lock");
//   body.classList.remove("-scroll-lock");
//
//   window.scrollTo(0, scrollPositionBeforeLock);
//   document.body.scrollTo(0, 0);
//
//   $(".--modal-scrollable-element").off("touchmove pointermove", preventDefault);
// }
//
// // Check device type
//
// const isApple = navigator.userAgent.toLowerCase().indexOf("mac") !== -1;
// const isAndroid = navigator.userAgent.toLowerCase().indexOf("android") !== -1;
//
// if (isApple) {
//   document.body.classList.add("-apple");
// }
//
// if (isAndroid) {
//   document.body.classList.add("-android");
// }
//
// // Check device size
//
// window.isPc = window.innerWidth > 1024;
// window.isTablet = window.innerWidth > 759 && window.innerWidth <= 1024;
// window.isMobile = window.innerWidth < 760;
//
// function checkDeviceSize() {
//   window.isPc = window.innerWidth > 1024;
//   window.isTablet = window.innerWidth > 759 && window.innerWidth <= 1024;
//   window.isMobile = window.innerWidth < 760;
// }
//
// window.addEventListener("DOMContentLoaded", checkDeviceSize);
// window.addEventListener("resize", checkDeviceSize);
//
// // Set CSS variable with window.innerHeight
//
// function setCssWindowInnerHeight() {
//   document.documentElement.style.setProperty(
//     "--window-inner-height",
//     `${window.innerHeight}px`
//   );
// }
//
// window.addEventListener("DOMContentLoaded", setCssWindowInnerHeight);
// window.addEventListener("resize", setCssWindowInnerHeight);
//
// // Set CSS variable with scrollbar width
//
// function setScrollbarWidthInCSS() {
//   $("body").append(`
// 		<div id="scrollbar-width-test" style="position: absolute;top: -999px;left: -999px;width: 50px;height: 50px;overflow: scroll;">
// 			<div style="height: 100px;"></div>
// 		</div>
// 	`);
//
//   const scrollbarWidthTestEl = $("#scrollbar-width-test")[0];
//   const scrollbarWidth =
//     scrollbarWidthTestEl.offsetWidth - scrollbarWidthTestEl.clientWidth;
//
//   document.documentElement.style.setProperty(
//     "--scrollbar-width",
//     `${scrollbarWidth}px`
//   );
//
//   window.scrollbarWidth = scrollbarWidth;
//
//   scrollbarWidthTestEl.remove();
// }
//
// window.addEventListener("DOMContentLoaded", setScrollbarWidthInCSS);
// window.addEventListener("resize", setScrollbarWidthInCSS);
//
// // Click outside callback
//
// function customClickOutsideCallback(selector, callback) {
//   $(document).on("mouseup", function (e) {
//     const isSelector = $(e.target).is(selector);
//     const hasParent = $(e.target).closest(selector).length;
//
//     if (!isSelector && !hasParent && typeof callback === "function") {
//       callback(e, selector);
//     }
//   });
// }
//
// // Number input
//
// $(document).on("input", "input[data-integer]", inputInteger);
// $(document).on("input blur", "input[data-integer]", inputIntegerAutoValidate);
// $(document).on(
//   "keypress",
//   'input[data-integer="float"]',
//   inputIntegerFloatDotValidate
// );
//
// function inputInteger(e) {
//   const isFloatInt = $(e.target).data("integer").toLowerCase() === "float";
//
//   if (isFloatInt) {
//     inputIntegerFloat(e);
//   } else {
//     inputIntegerCeil(e);
//   }
// }
//
// function inputIntegerCeil(e) {
//   e.target.value = e.target.value.replace(/[^0-9]/g, "");
// }
//
// function inputIntegerFloat(e) {
//   let returnValue = e.target.value
//     .replace(/[^0-9.]/g, "")
//     .replace(/(\..*?)\..*/g, "$1");
//
//   const toFixed = $(e.target).data("to-fixed");
//   const dotPosition = returnValue.indexOf(".");
//
//   if (toFixed && dotPosition !== -1) {
//     returnValue = returnValue.slice(0, dotPosition + Number(toFixed) + 1);
//   }
//
//   e.target.value = returnValue;
// }
//
// function inputIntegerFloatDotValidate(e) {
//   const hasDot = e.target.value.indexOf(".") !== -1;
//   const dotPress = e.which === 46;
//
//   if (hasDot && dotPress) {
//     e.preventDefault();
//   }
// }
//
// function inputIntegerAutoValidate(e) {
//   const value = e.target.value;
//
//   const min = $(e.target).data("min");
//   const max = $(e.target).data("max");
//
//   const isBlurEvent =
//     e.type.toLowerCase() === "blur" || e.type.toLowerCase() === "focusout";
//   const isAutoValidate = $(e.target).is("[data-auto-validate]");
//
//   const minNotValid =
//     isAutoValidate && isBlurEvent && min && value !== "" && value < min;
//   const maxNotValid = isAutoValidate && max && value > max;
//
//   if (minNotValid) {
//     e.target.value = min;
//   }
//
//   if (maxNotValid) {
//     e.target.value = max;
//   }
// }
//
// // Input mask
//
// $(document).ready(function () {
//   const phoneMask = $(".--mask-phone");
//
//   if (!phoneMask.length) return;
//
//   phoneMask.inputmask({
//     mask: "+38 (999) 999 99 99",
//     showMaskOnHover: false,
//   });
// });
//
// // Form validation
//
// function inputValidation(input) {
//   const inputBox = input.closest("[data-important]");
//   const validationType = inputBox.attr("data-important");
//
//   inputBox.removeClass("-valid -invalid");
//
//   if (validationType === "email") emailValidator(input);
//   if (validationType === "length") lengthValidator(input);
//   if (validationType === "checked") isCheckedValidator(input);
//   if (validationType === "not-empty") notEmptyValidator(input);
//   if (validationType === "inputmask") inputmaskValidator(input);
// }
//
// function checkFormValidation(form) {
//   let checkInputValid = true;
//
//   $(form)
//     .find("[data-important]")
//     .each(function () {
//       if (!$(this).hasClass("-valid")) {
//         checkInputValid = false;
//       }
//     });
//
//   const button = $(form).find(".--send-button, .--contact-form-part-button");
//
//   if (!checkInputValid) {
//     button.addClass("-disable");
//   } else {
//     button.removeClass("-disable");
//   }
//
//   return checkInputValid;
// }
//
// $(document).ready(function () {
//   $(".form form").each(function () {
//     $(this)
//       .find("[data-important]")
//       .each(function () {
//         const input = $(this).find("input, textarea");
//         inputValidation(input);
//
//         $(this).removeClass("-invalid");
//       });
//
//     checkFormValidation(this);
//   });
// });
//
// // Form validation - helper
//
// function setInputValidation(input, status) {
//   if (status) {
//     input.closest("[data-important]").addClass("-valid");
//   } else {
//     input.closest("[data-important]").addClass("-invalid");
//   }
// }
//
// // Form validation - validators
//
// function notEmptyValidator(input) {
//   setInputValidation(input, input.val().trim().length > 0);
// }
//
// function isCheckedValidator(input) {
//   setInputValidation(input, input.is(":checked"));
// }
//
// function emailValidator(input) {
//   const value = input.val().trim();
//   const reg =
//     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/;
//
//   setInputValidation(input, reg.test(String(value).toLowerCase()));
// }
//
// function lengthValidator(input) {
//   const value = input.val().trim();
//
//   const minLength = input.closest("[data-important]").attr("data-min-length");
//   const maxLength = input.closest("[data-important]").attr("data-max-length");
//
//   let isValid = false;
//
//   if (minLength && maxLength) {
//     isValid = value.length >= minLength && value.length <= maxLength;
//   }
//
//   if (minLength && !maxLength) {
//     isValid = value.length >= minLength;
//   }
//
//   if (!minLength && maxLength) {
//     isValid = value.length <= maxLength;
//   }
//
//   setInputValidation(input, isValid);
// }
//
// function inputmaskValidator(input) {
//   setInputValidation(input, input.inputmask("isComplete"));
// }
//
// // Selector full transitionend callback
//
// function fullTransitionendCallback(element, callback, customProperty = false) {
//   if ($(element).length === 0) return;
//
//   const transitionProperties = $(element)
//     .css("transition-property")
//     .split(",")
//     .map((property) => {
//       return property.trim();
//     });
//
//   const transitionDurations = $(element)
//     .css("transition-duration")
//     .split(",")
//     .map((duration) => {
//       return parseFloat(duration);
//     });
//
//   let longestProperty = false;
//
//   if (transitionProperties.length > 1 && customProperty === false) {
//     longestProperty =
//       transitionProperties[
//         transitionDurations.indexOf(Math.max(...transitionDurations))
//       ];
//   }
//
//   $(element).on("transitionstart", function () {
//     $(this).removeAttr("data-transitionend-triggered");
//   });
//
//   $(element).on("transitionend", function (e) {
//     const isTriggered = $(this).is("[data-transitionend-triggered]");
//
//     if (isTriggered) return;
//
//     const isCustomProperty =
//       customProperty && e.originalEvent.propertyName === customProperty;
//     const isSingleCallback =
//       customProperty === false &&
//       longestProperty === false &&
//       typeof callback === "function";
//     const isLongestPropertyCallback =
//       longestProperty &&
//       e.originalEvent.propertyName === longestProperty &&
//       typeof callback === "function";
//
//     if (isCustomProperty || isSingleCallback || isLongestPropertyCallback) {
//       $(this).attr("data-transitionend-triggered", true);
//       callback(e);
//     }
//   });
// }
//
// // Lazyload - params
//
// // if you set DEFAULT_LAZYLOAD_OFFSET to 0 or false
// // then all elements on the page will be loaded the first time the scroll event fires
//
// const DEFAULT_LAZYLOAD_OFFSET = 700;
//
// // Lazyload - loaders
//
// function imgLazyload(customSelector, customLazyloadOffset) {
//   const isSelectorValid = typeof customSelector === "string";
//
//   const selector = isSelectorValid
//     ? `${customSelector} img.-lazyload`
//     : "img.-lazyload";
//   const notSelector = isSelectorValid
//     ? ".-loaded"
//     : ".-loaded, [data-custom-lazyload-trigger] .-lazyload";
//
//   $(selector)
//     .not(notSelector)
//     .each(function () {
//       if (!customSelector && !isElementAllowToLoad(this, customLazyloadOffset))
//         return;
//
//       $(this).on("load", lazyloadFullLoadedCallback);
//       $(this).removeAttr("srcset").addClass("-loaded");
//     });
// }
//
// function bgLazyload(customSelector, customLazyloadOffset) {
//   const isSelectorValid = typeof customSelector === "string";
//
//   const selector = isSelectorValid
//     ? `${customSelector} .-bg-lazyload`
//     : ".-bg-lazyload";
//   const notSelector = isSelectorValid
//     ? ".-loaded"
//     : ".-loaded, [data-custom-lazyload-trigger] .-bg-lazyload";
//
//   $(selector)
//     .not(notSelector)
//     .each(function () {
//       if (!customSelector && !isElementAllowToLoad(this, customLazyloadOffset))
//         return;
//
//       const src = $(this).attr("data-src");
//
//       $(this)
//         .css("background-image", `url(${src})`)
//         .removeAttr("data-src")
//         .addClass("-loaded");
//     });
// }
//
// function videoLazyload(customSelector, customLazyloadOffset) {
//   const isSelectorValid = typeof customSelector === "string";
//
//   const selector = isSelectorValid
//     ? `${customSelector} video.-lazyload`
//     : "video.-lazyload";
//   const notSelector = isSelectorValid
//     ? ".-loaded"
//     : ".-loaded, [data-custom-lazyload-trigger] .-lazyload";
//
//   $(selector)
//     .not(notSelector)
//     .each(function () {
//       if (!customSelector && !isElementAllowToLoad(this, customLazyloadOffset))
//         return;
//
//       $(this).on("loadeddata", lazyloadFullLoadedCallback);
//
//       const src = $(this).attr("data-src");
//       const dataStart = $(this).attr("data-start-position");
//
//       const t = dataStart ? `#t=${dataStart}` : "";
//       const source = `<source type="video/mp4" src="${src}${t}" />`;
//
//       $(this).html(source).removeAttr("data-src").addClass("-loaded");
//     });
// }
//
// function iframeLazyload(customSelector, customLazyloadOffset) {
//   const isSelectorValid = typeof customSelector === "string";
//
//   const selector = isSelectorValid
//     ? `${customSelector} iframe.-lazyload`
//     : "iframe.-lazyload";
//   const notSelector = isSelectorValid
//     ? ".-loaded"
//     : ".-loaded, [data-custom-lazyload-trigger] iframe.-lazyload";
//
//   $(selector)
//     .not(notSelector)
//     .each(function () {
//       if (!customSelector && !isElementAllowToLoad(this, customLazyloadOffset))
//         return;
//
//       const src = $(this).attr("data-src");
//
//       $(this).on("load", lazyloadFullLoadedCallback);
//       $(this).attr("src", src).removeAttr("data-src").addClass("-loaded");
//     });
// }
//
// // Lazyload - helpers
//
// function isElementAllowToLoad(el, customLazyloadOffset) {
//   const lazyloadOffset = customLazyloadOffset
//     ? customLazyloadOffset
//     : DEFAULT_LAZYLOAD_OFFSET;
//
//   if (!lazyloadOffset) return true;
//
//   const offsetTop = $(el).offset().top;
//   const offsetToLoad = window.scrollY + window.innerHeight + lazyloadOffset;
//
//   return offsetTop < offsetToLoad;
// }
//
// function lazyloadFullLoadedCallback(e) {
//   $(e.target).addClass("-full-loaded");
//   $(e.target).off("load", lazyloadFullLoadedCallback);
// }
//
// function lazyload(customSelector, customLazyloadOffset) {
//   imgLazyload(customSelector, customLazyloadOffset);
//   bgLazyload(customSelector, customLazyloadOffset);
//   videoLazyload(customSelector, customLazyloadOffset);
//   iframeLazyload(customSelector, customLazyloadOffset);
//
//   const notLoadedElementsCount = $(".-lazyload, .-bg-lazyload").not(
//     ".-loaded"
//   ).length;
//
//   if (notLoadedElementsCount === 0) {
//     $(window).off("scroll", lazyloadOnScroll);
//   }
// }
//
// function viewportLazyload() {
//   lazyload(false, 1);
// }
//
// function lazyloadOnScroll() {
//   if (window.scrollY > 0) {
//     lazyload();
//   }
// }
//
// $(window).on("load", viewportLazyload);
// $(window).on("load scroll", lazyloadOnScroll);
//
// // Anchor link
//
// const scrollLinkMinSpeed = 600;
// const scrollLinkSpeedValue = 2;
//
// const scrollLinkDefaultOffset = {
//   default: {
//     1024: 78,
//     0: 57,
//   },
// };
// const scrollLinkCustomOffset = {
//   default: {
//     1024: 78,
//     0: 57,
//   },
// };
//
// const scrollLinkDefaultOffsetToTop = false;
// const scrollLinkCustomOffsetToTop = false;
//
// const scrollLinkDefaultOffsetToBottom = false;
// const scrollLinkCustomOffsetToBottom = false;
//
// // Anchor link - logic
//
// $(document).on("click", "a", function (e) {
//   if ($(this).is(".--contact-open-form-button")) return;
//
//   const href = $(this).attr("href");
//   const to = getElementByHref(href);
//
//   if (to) {
//     e.preventDefault();
//
//     const position = getScrollLinkFinalPosition(to);
//
//     if (position === window.scrollY) return;
//
//     const speed = getScrollSpeedByPosition(position);
//
//     if ($(this).is(".about-anchor")) {
//       $("html, body").animate({ scrollTop: position - 58 }, speed);
//     } else {
//       $("html, body").animate({ scrollTop: position }, speed);
//     }
//   }
// });
//
// // Anchor link - helpers
//
// function getElementByHref(href) {
//   let hash = false;
//
//   if (href.indexOf("#") === 0) {
//     hash = href;
//   } else {
//     const url = new URL(href);
//
//     if (
//       url.host === window.location.host &&
//       url.pathname === window.location.pathname
//     ) {
//       hash = url.hash ? url.hash : false;
//     }
//   }
//
//   if (hash === "#") {
//     hash = false;
//   } else {
//     hash = $(hash);
//   }
//
//   return hash.length ? hash : false;
// }
//
// function getScrollLinkDefaultValue(value, hasBg) {
//   if (value === false) return false;
//
//   let returnValue = false;
//
//   if (typeof value === "object") {
//     let objectKey;
//
//     if (hasBg && typeof value["hasBg"] !== "undefined") {
//       objectKey = value["hasBg"];
//     } else {
//       objectKey = value["default"];
//     }
//
//     if (typeof objectKey === "string" || typeof objectKey === "number") {
//       returnValue = objectKey;
//     } else if (typeof objectKey === "object") {
//       Object.keys(objectKey).forEach((key) => {
//         if (window.innerWidth > key) {
//           returnValue = objectKey[key];
//           return false;
//         }
//       });
//     }
//   } else {
//     returnValue = value;
//   }
//
//   return returnValue;
// }
//
// function getScrollLinkPositionByParams(to, offsetValue, customOffsetValue) {
//   const pageScrollHeight = Math.max(
//     document.body.scrollHeight,
//     document.documentElement.scrollHeight,
//     document.body.offsetHeight,
//     document.documentElement.offsetHeight,
//     document.body.clientHeight,
//     document.documentElement.clientHeight
//   );
//
//   const maxScrollHeight = pageScrollHeight - window.innerHeight;
//
//   const header = $(".header");
//   const marginTop = parseInt(to.css("margin-top"));
//
//   let offset = 0;
//   let position = to.offset().top;
//
//   if (offsetValue === "margin") {
//     offset += marginTop;
//   } else if (offsetValue === "half-margin") {
//     offset += marginTop / 2;
//   } else if (offsetValue === "header-height") {
//     offset += header.length ? header.outerHeight() : 0;
//   }
//
//   if (customOffsetValue) {
//     offset += customOffsetValue;
//   }
//
//   position -= offset;
//
//   if (position < 0) {
//     position = 0;
//   } else if (position > maxScrollHeight) {
//     position = maxScrollHeight;
//   }
//
//   return position;
// }
//
// function getScrollLinkFinalPosition(to) {
//   const hasBg = $(to).hasClass("--has-bg");
//
//   const offsetValue = getScrollLinkDefaultValue(scrollLinkDefaultOffset, hasBg);
//   const customOffsetValue = getScrollLinkDefaultValue(
//     scrollLinkCustomOffset,
//     hasBg
//   );
//
//   const offsetValueToTop = getScrollLinkDefaultValue(
//     scrollLinkDefaultOffsetToTop,
//     hasBg
//   );
//   const customOffsetValueToTop = getScrollLinkDefaultValue(
//     scrollLinkCustomOffsetToTop,
//     hasBg
//   );
//
//   const offsetValueToBottom = getScrollLinkDefaultValue(
//     scrollLinkDefaultOffsetToBottom,
//     hasBg
//   );
//   const customOffsetValueToBottom = getScrollLinkDefaultValue(
//     scrollLinkCustomOffsetToBottom,
//     hasBg
//   );
//
//   let position = getScrollLinkPositionByParams(
//     to,
//     offsetValue,
//     customOffsetValue
//   );
//
//   if (
//     position > window.scrollY &&
//     (offsetValueToBottom || customOffsetValueToBottom)
//   ) {
//     if (offsetValueToBottom === false) {
//       position = getScrollLinkPositionByParams(
//         to,
//         offsetValue,
//         customOffsetValueToBottom
//       );
//     } else if (customOffsetValueToBottom === false) {
//       position = getScrollLinkPositionByParams(
//         to,
//         offsetValueToBottom,
//         customOffsetValue
//       );
//     } else {
//       position = getScrollLinkPositionByParams(
//         to,
//         offsetValueToBottom,
//         customOffsetValueToBottom
//       );
//     }
//   }
//
//   if (
//     position < window.scrollY &&
//     (offsetValueToTop || customOffsetValueToTop)
//   ) {
//     if (offsetValueToTop === false) {
//       position = getScrollLinkPositionByParams(
//         to,
//         offsetValue,
//         customOffsetValueToTop
//       );
//     } else if (customOffsetValueToTop === false) {
//       position = getScrollLinkPositionByParams(
//         to,
//         offsetValueToTop,
//         customOffsetValue
//       );
//     } else {
//       position = getScrollLinkPositionByParams(
//         to,
//         offsetValueToTop,
//         customOffsetValueToTop
//       );
//     }
//   }
//
//   return position;
// }
//
// function getScrollSpeedByPosition(position) {
//   let speed = position * (0.001 * scrollLinkSpeedValue) * 100;
//
//   if (speed < scrollLinkMinSpeed) {
//     speed = scrollLinkMinSpeed;
//   }
//
//   return speed;
// }
