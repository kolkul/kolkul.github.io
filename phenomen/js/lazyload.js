const getLazyloadImages = document.querySelectorAll(".-lazyload");
const getLazyloadVideos = document.querySelectorAll(".-video-lazyload");
const getLazyloadLogoGif = document.getElementById("logo-gif");

const removeAttrSrcsetFromImg = () => {
  getLazyloadImages.forEach((img) => {
    if (!img.classList.contains("-lazyload")) return;

    img.removeAttribute("srcset");
    img.classList.remove("-lazyload");
  });
};

function fetchMedia(url) {
  return new Promise(function (resolve, reject) {
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.responseType = "blob";

    request.onload = function () {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(new Error(req.statusText));
      }
    };

    request.onerror = function () {
      reject(new Error("Network error"));
    };

    request.send();
  });
}

const startVideoLoading = () => {
  getLazyloadVideos.forEach((video) => {
    const getDataSrc = video.getAttribute("data-src");

    video.removeAttribute("data-src");

    fetchMedia(getDataSrc)
      .then(function (blob) {
        video.src = URL.createObjectURL(blob);
        video.play();
        video.setAttribute("playsinline", "");
        video.setAttribute("autoplay", "");
      })
      .catch(function (err) {
        console.error("Unable to fetch video: " + err.message);
      });
  });
};

// Gif logo lazyload
getLazyloadLogoGif.addEventListener("load", function () {});

document.addEventListener("DOMContentLoaded", () => {
  const getWindowScroll = window.scrollY;

  if (getWindowScroll > 0) {
    removeAttrSrcsetFromImg();
  }

  // logoLazyload();

  window.addEventListener("scroll", () => {
    removeAttrSrcsetFromImg();
  });
});

window.addEventListener("load", () => {
  const newLogoWay = `${getMainHref}images/logo-gif.gif`;

  fetchMedia(newLogoWay)
    .then(function (blob) {
      console.log(URL.createObjectURL(blob));

      getLazyloadLogoGif.src = URL.createObjectURL(blob);
      getLazyloadLogoGif.removeAttribute("srcset");
      startVideoLoading();
    })
    .catch(function (err) {
      console.error("Unable to fetch logo: " + err.message);
    });
});
