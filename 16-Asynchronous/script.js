'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
/* 
const renderCountry = function (data) {
  // console.log(data);
  const html = `
  <article class="country">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}M people</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0]}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0]}</p>
          </div>
        </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};
 */
/* 
const getCountryAndNeighbour = function (country) {
  // Ajax call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // render country 1
    renderCountry(data);

    // get neighbor country (2)
    const neighbor = data.borders[1];
    if (!neighbor) return;

    // Ajax call country 2
    const request2 = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/alpha/${neighbor}`);
    request.send();
    request2.addEventListener('load', function () {
      const data2 = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2);
    });
  });
};

// getCountryAndNeighbour('Egypt');
 */

//=> Promises and Fetch API
/* 
const getJSON = function (url, errorMsg = 'Something Went Wrong!') {
  return fetch(url).then(response => {
    console.log(response);

    if (!response.ok) {
      throw new Error(`${errorMsg} ${response.status}`);
    }
    return response.json();
  });
};

const getCountryData = function (country) {
  // country 1
  getJSON(
    `https://restcountries.com/v3.1/name/${country}`,
    `Country Not Found!`
  )
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders[1];

      if (!neighbor) throw new Error('No Neighbours found');

      // country 2

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbor}
      `,
        'Country Not Found!'
      );
    })
    .then(data => renderCountry(data[0]))
    .catch(err => {
      console.error(`${err}`);
      renderError(`Something went Wrong 💣💣 ${err}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('egypt');
});

// getCountryData('usa');

getCountryData('australia');
 */

//=> Coding Challenge #1
