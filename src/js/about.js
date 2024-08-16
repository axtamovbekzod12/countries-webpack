import '../css/main.css';
import './mode';
import request from './request';
import {createCountryInfo} from './updateUI';

const queryString = window.location.search,
      urlParams = new URLSearchParams(queryString),
      country = urlParams.get('country'),
      countryAPI = `https://restcountries.com/v3.1/name/${country}`;

request(countryAPI)
    .then(data => createCountryInfo(data[0]))
    .catch(err => alert(err.message));