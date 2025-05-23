const styles = `
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

:root {
  --bg-color: #596ee4ff;
  --poppins-font: poppins;
  --weather-container-bg: linear-gradient(to bottom right, #fff, #596ee4ff);
  --text-color: #fff;
  --theme-icon-opacity-dark: 1;
  --theme-icon-visibility-dark: visible;
  --theme-icon-opacity-light: 0;
  --theme-icon-visibility-light: hidden;
}

body.dark-theme {
  --bg-color: #444948;
  --weather-container-bg: linear-gradient(to bottom right, #fff, #444948);
  --text-color: #fff;
  --theme-icon-opacity-dark: 0;
  --theme-icon-visibility-dark: hidden;
  --theme-icon-opacity-light: 1;
  --theme-icon-visibility-light: visible;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--poppins-font);
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg-color);
  height: 100%;
  width: 100%;

  overflow: hidden;
  transition: all 0.3s ease;
}

.flex {
  display: flex;
}

.grid {
  display: grid;
}

.weather-box {
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
}

@media screen and (max-width: 600px) {
  .weather-container {
    border-radius: 0;
  }
}
.weather-container {
  background: var(--weather-container-bg);
  height: 500px;
  width: 900px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
}

.header {
  justify-content: space-between;
  position: relative;
}

.weather-icon,
.theme {
  padding: 0.5rem;
}

.weather-icon-img {
  width: 70px;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}

.theme {
  margin-top: 0.7rem;
}

.theme-toggle {
  font-size: 25px;
  position: relative;
  color: var(--text-color);
  cursor: pointer;
}

.theme-icons {
  position: relative;
}

.dark__toggle,
.light__toggle {
  right: 1rem;
  position: absolute;
  padding: 0.5rem;
  display: flex;
  width: max-content;
  height: max-content;
}

.light__toggle {
  opacity: var(--theme-icon-opacity-light);
  visibility: (var(--theme-icon-visibility-light));
}
.dark__toggle {
  opacity: var(--theme-icon-opacity-dark);
  visibility: var(--theme-icon-visibility-dark);
}

/* .change-theme-icon .light__toggle{
    opacity: 1;
    visibility: visible;
}

.change-theme-icon .dark__toggle {
    opacity: 0;
    visibility: hidden;
} */

.weather-search {
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-top: 1rem;
  position: relative;
}

.weather-search input,
button {
  padding: 0.5rem;
  outline: none;
  background-color: var(--bg-color);
  border: none;
}

.location {
  font-size: 25px;
  color: var(--weather-container-bg);
  height: 3rem;
  width: 3.5rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 5px;
  background-color: var(--text-color);
}

.weather-input,
input::placeholder {
  height: 3rem;
  width: 20rem;
  text-transform: uppercase;
  color: var(--text-color);
  font-weight: 400;
  font-size: 25px;
  border-radius: 5px;
}

.search-button {
  cursor: pointer;
  height: 3rem;
  width: 3.5rem;
  font-size: 25px;
  background-color: var(--text-color);
  color: var(--weather-container-bg);
  border-radius: 5px;
  text-align: center;
  justify-content: center;
  align-items: center;
}
.weather-info-container {
  justify-content: center;
  align-items: center;
  animation: weather forwards 0.7s ease-in;
}

@keyframes weather {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.weather-info {
  /* margin-top: .5rem; */
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 4rem;
}

.weather__info__img {
  width: 200px;
}

.weather-conditions {
  margin-right: 1rem;
  position: relative;
}

.temp,
.weather-codt,
.weather-country {
  display: flex;
  text-align: center;
  justify-content: center;
}

.temp {
  font-size: 45px;
  font-weight: 300;
  color: var(--text-color);
}

.weather-codt,
.weather-country {
  color: var(--text-color);
  font-size: 20px;
  font-weight: 400;
  display: flex;
  text-align: center;
}

.condition-content {
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
}

.weather__hum__img {
  width: 70px;
}

.weather-condition-title-info {
  margin-left: 0.5rem;
}

.humidity,
.wind-info,
.condition__text {
  color: var(--text-color);
}

.error-location {
  justify-content: center !important;
  align-items: center;
  margin-top: 2.5rem;
  display: none;
}

.error-image {
  width: 200px;
  display: flex;
  text-align: center;
  justify-self: center;
  animation: zoom forwards 2s ease;
  animation-delay: 0.2;
}

@keyframes zoom {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.error-message {
  color: var(--text-color);
  font-weight: 600;
  font-size: 20px;
}
.error-messageUn {
  color: var(--text-color);
  font-weight: 600;
  font-size: 20px;
  text-align: center;
}

.weather-info-container {
  display: none;
}

.footer {
  position: absolute;
  bottom: 15%;
  left: 20%;
}

.build-info {
  color: var(--text-color);
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
}

@media screen and (max-width: 330px) {
  body {
    display: none;
  }
}

@media screen and (max-width: 380px) {
  /*   body {
        overflow: scroll;
    }
 */
  .weather-search {
    margin-top: 0;
  }

  .weather-container {
    width: 370px;
    height: 100%;
    padding-bottom: 3rem;
  }

  .weather-input,
  input::placeholder {
    width: 14rem;
    font-size: 16px;
    font-weight: 500;
    height: 3rem;
    padding: 0.1rem;
    display: flex;
    text-align: left;
  }

  .location,
  .weather-input,
  .search-button {
    height: 4rem;
  }

  .weather-info {
    flex-direction: column;
    gap: 1rem;
  }

  .weather__info__img {
    width: 120px;
  }

  .condition__text {
    font-size: 15px;
  }

  .condition-content {
    gap: 1rem;
  }

  .footer {
    left: 17%;
    bottom: 2%;
  }

  .build-info {
    font-size: 12px;
  }
}

@media screen and (min-width: 381px) {
  .weather-search {
    margin-top: 0;
  }

  .weather-container {
    width: 370px;
    height: 100%;
    padding-bottom: 3rem;
  }

  .weather-input,
  input::placeholder {
    width: 14rem;
    font-size: 16px;
    font-weight: 500;
    height: 3rem;
    padding: 0.1rem;
    display: flex;
    text-align: left;
  }

  .location,
  .weather-input,
  .search-button {
    height: 4rem;
  }

  .weather-info {
    flex-direction: column;
    gap: 1rem;
  }

  .weather__info__img {
    width: 120px;
  }

  .condition__text {
    font-size: 15px;
  }

  .condition-content {
    gap: 1rem;
  }

  .footer {
    left: 17%;
    bottom: 2%;
  }

  .build-info {
    font-size: 12px;
  }
}

@media screen and (min-width: 400px) {
  .weather-container {
    width: 450px;
  }
}

@media screen and (min-width: 700px) {
  .weather-container {
    width: 650px;
  }
}

@media screen and (min-width: 920px) {
  .weather-container {
    width: 900px;
    height: 500px;
    padding-bottom: 0;
  }

  .weather-input,
  input::placeholder {
    width: 20rem;
  }

  .location,
  .weather-input,
  .search-button {
    height: 3rem;
  }

  .weather-info {
    flex-direction: row;
    gap: 4rem;
  }

  .weather__info__img {
    width: 200px;
  }
}
`;

const fontLink = document.createElement("link");
fontLink.rel = "stylesheet";
fontLink.href =
  "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap";
document.head.appendChild(fontLink);

const styleEl = document.createElement("style");
styleEl.textContent = `
  ${styles}
`;
document.head.appendChild(styleEl);
