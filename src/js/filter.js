import {createCountries} from './updateUI';
import request from './request';

const searchFormElement = document.querySelector('.search');

searchFormElement.search.addEventListener("input", () => {
    const searchValue = searchFormElement.search.value.toLowerCase(),
          cardsItem = document.querySelectorAll('.cards__item'),
          cardsTitles = document.querySelectorAll('.cards__title');
    cardsTitles.forEach((title, i) => title.textContent.toLowerCase().includes(searchValue) ? cardsItem[i].style.display = 'block' : cardsItem[i].style.display = 'none');
});

const searchSelect = document.querySelectorAll('.search__select-list li'),
      searchSelectSpan = document.querySelector('.search__select span');

searchSelect.forEach((li) => {
    li.addEventListener('click', () => {
        searchSelectSpan.textContent = li.textContent
        let filterAPI;
        
        li.textContent == 'All' ? filterAPI = 'https://restcountries.com/v3.1/all' : filterAPI = `https://restcountries.com/v3.1/region/${li.textContent}`;
        request(filterAPI)
            .then(data => createCountries(data))
            .catch(err => alert(err.message));
    });
});