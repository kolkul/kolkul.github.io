const windowLocation = window.location.href;
let getMainHref = "";

if (windowLocation.includes("uk")) {
  getMainHref = "../";
}

const returnHtml = (params) => {
  const {
    dateOfBirth,
    height,
    weight,
    en,
    uk,
    url: { youtube, tm },
    img: { photo, fc },
  } = params;

  const getLang = document.documentElement.lang === "en" ? en : uk;

  return `<div class="swiper-slide players-section__slide">
                  <div class="player-card">
                    <div class="player-card__links">
                      <a
                        href="${youtube}"
                        target="_blank"
                        class="player-card__link player-card__youtube"
                      >
                      </a>
                      <a
                        href="${tm}"
                        target="_blank"
                        class="player-card__link player-card__tm"
                      >
                        <img
                          src="${getMainHref}images/tm-icon.png"
                          alt="${getLang.name} - Phenomen.pro"
                        />
                      </a>
                    </div>
                    <div class="player-card__fc">
                      <img
                        src="${getMainHref}images/fc-logo/${fc}"
                        alt="${getLang.name} - Phenomen.pro"
                      />
                    </div>
                    <div class="player-card__photo">
                      <img
                        src="${getMainHref}images/players/${photo}"
                        alt="${getLang.name} - Phenomen.pro "
                      />
                    </div>
                    <div class="player-card__bot">
                      <div class="player-card__info-box">
                        <ul class="player-card__info">
                          <li>
                            <p>Дата народження</p>
                            <p><strong>${dateOfBirth}</strong></p>
                          </li>
                          <li>
                            <p>Зріст / Вага</p>
                            <p><strong>${height} см / ${weight} кг</strong></p>
                          </li>
                          <li>
                            <p>Клуб</p>
                            <p><strong>${getLang.club}</strong></p>
                          </li>
                          <li>
                            <p>Позиція</p>
                            <p><strong>${getLang.position}</strong></p>
                          </li>
                          <li>
                            <p>Ведуща нога</p>
                            <p><strong>${getLang.leg}</strong></p>
                          </li>
                          <li>
                            <p>Громадянство</p>
                            <p><strong>${getLang.citizenship}</strong></p>
                          </li>
                        </ul>
                      </div>
                      <a
                        href="${tm}"
                        target="_blank"
                        class="player-card__btn --medium"
                      >
                        ${getLang.name} 
                      </a>
                    </div>
                  </div>
                </div>`;
};

// Shuffle array function

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

// GET and SET data

const getContainer = document.getElementById("playerContainer");

fetch(`${getMainHref}players.json`)
  .then((response) => response.json())
  .then((json) => {
    const shuffledArray = shuffle(json);

    shuffledArray.forEach((playerData) => {
      const newElement = document.createElement("div");
      newElement.innerHTML = returnHtml(playerData);
      const cardHtml = newElement.firstChild;

      getContainer.prepend(cardHtml);
    });
  });
