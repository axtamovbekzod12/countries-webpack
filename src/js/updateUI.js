const ulElement = document.querySelector('.cards');

export const createCountries = countries => {
    ulElement.innerHTML = '';
    countries.forEach(country => {
        const commonName = country.name.common,
              population = country.population,
              region = country.region,
              capital = country.capital ? country.capital[0] : 'No Capital',
              flag = country.flags.svg;
        ulElement.innerHTML += `
            <li class="cards__item">
                <a href="./about.html?country=${commonName}">
                    <img src=${flag} alt="germany-flag" width="267" height="160">
                    <div class="cards__item-inner">
                        <h3 class="cards__title">${commonName}</h3>
                        <p class="population">Population: <span>${population}</span></p>
                        <p class="region">Region: <span>${region}</span></p>
                        <p class="capital">Capital: <span>${capital}</span></p>
                    </div>
                </a>
            </li>
        `;
    });
}

// ABOUT UI
const countryInfoElement = document.querySelector('.country-info');
export const createCountryInfo = (country) => {
    const {population, borders, capital, flags, name, region, tld, currencies, languages, subregion} = country,
          nativeName = Object.values(name.nativeName)[0].official,
          currency = Object.values(currencies)[0].name,
          language = Object.values(languages);

    countryInfoElement.innerHTML = `
            <img class="country-info__img" src=${flags.svg} alt="germany-flag" width="560" height="400"/>
            <div class="country-info__content">
              <h2>${name.common}</h2>
              <ul class="country-info__list">
                <li class="country-info__item">
                  <p class="name">Native Name: <span>${nativeName}</span></p>
                  <p class="population">Population: <span>${population}</span></p>
                  <p class="region">Region: <span>${region}</span></p>
                  <p class="sub-region">Sub Region: <span>${subregion}</span></p>
                  <p class="capital">Capital: <span>${capital}</span></p>
                </li>
                <li class="country-info__item">
                  <p class="name">Top Level Domain: <span>${tld}</span></p>
                  <p class="population">Currencies: <span>${currency}</span></p>
                  <p class="region">Languages: <span>${language}</span></p>
                </li>
              </ul>
  
              <div class="country-info__borders">
                <h3>Border Countries:</h3>
                ${borders ? borders.map(border => `<a href="#">${border}</a>`) : 'No Borders'}
              </div>
            </div>
    `;
}
// ${borders ? borders.map(border => `<a href="./about.html/country=/alpha/${border}">${border}</a>`) : 'No Borders'}