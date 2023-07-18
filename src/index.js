import axios from 'axios';
import SlimSelect from 'slim-select';
import Notiflix from 'notiflix';
import 'slim-select/dist/slimselect.css';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

axios.defaults.headers.common['x-api-key'] =
    'live_hP6H204vpUdETEOaUdWpI7E2L2kyydQsb5iYRdJtdkjILdxbt3ZNy6JmQuLU9CwE';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';

const selectInputEl = document.querySelector('.breed-select');
const catItemEl = document.querySelector('.cat-info');
const loaderEl = document.querySelector('.loader');

selectInputEl.addEventListener('change', checkInput);

let allCatsArray = {};

fetchBreeds().then(data => {
    allCatsArray = data;
    getValuesToInput(allCatsArray);
    loaderEl.classList.add('hidden');
}).catch(err => {
    Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
    selectInputEl.innerHTML = `<option value='noInfo'>No info from server</option>`
    loaderEl.classList.add('hidden');
}
);

function getValuesToInput(array) {
    let markup = [];
    array.map((element) => {
        markup.push(`<option value=${element.id}>${element.name}</option>`)
    });
    selectInputEl.innerHTML = markup.join(' ');
    addSlimSelect();
}

function addSlimSelect() {
    new SlimSelect({
        select: '#selectElement'
    })
}

function checkInput(event) {
    loaderEl.classList.remove('hidden');
    fetchCatByBreed(event.target.value)
        .then(data => {
            let dataInfo = data[0].breeds[0];
            createCatMarkup(data, dataInfo);
            loaderEl.classList.add('hidden');
        }).catch(err => {
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
            catItemEl.innerHTML = '';
            loaderEl.classList.add('hidden');
        });
}

function createCatMarkup(data, dataInfo) {
    catItemEl.innerHTML = `<img class="cat-img" src=${data[0].url} alt=${dataInfo.name} width=300/>
  <div class="info-wrapper">
    <h2 class="cat-name">${dataInfo.name}</h2>
    <p>${dataInfo.description}</p>
      <p>
        <span class="cat-mood">Temperament: </span>
        ${dataInfo.temperament}
      </p>
    </div>`;
}