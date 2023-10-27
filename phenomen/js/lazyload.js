const getLazyloadImages = document.querySelectorAll(".-lazyload");
const getLazyloadVideos = document.querySelectorAll(".-video-lazyload");

const removeAttrSrcsetFromImg = () => {
  getLazyloadImages.forEach((img) => {
    if (!img.classList.contains("-lazyload")) return;

    img.removeAttribute("srcset");
    img.classList.remove("-lazyload");
  });
};

const startVideoLoading = () => {
  getLazyloadVideos.forEach((video) => {
    const getDataSrc = video.getAttribute("data-src");

    video.setAttribute("src", getDataSrc);
    video.load();

    video.addEventListener("loadeddata", (e) => {
      video.setAttribute("autoplay", "");
      video.setAttribute("playsinline", "");
      video.play();
    });
  });
};

window.addEventListener("load", () => {
  const getWindowScroll = window.scrollY;

  if (getWindowScroll > 0) {
    removeAttrSrcsetFromImg();
  }

  startVideoLoading();

  window.addEventListener("scroll", () => {
    removeAttrSrcsetFromImg();
  });
});
