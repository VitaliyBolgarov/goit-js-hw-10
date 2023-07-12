import axios from "axios";
import "./sass/index.scss"
import { fetchBreeds } from "./cat_api";
import { fetchCatByBreed } from "./cat_api";

// axios.defaults.headers.common["x-api-key"] = API_KEY;

const selectInputEl = document.querySelector('.breed-select');
const catItemEl = document.querySelector('.cat-info');

selectInputEl.addEventListener('input', checkInput);

let allCatsArray = {};

fetchBreeds().then(data => {
    allCatsArray = data;
    console.log(allCatsArray);
    getValuesToInput(allCatsArray);
}).catch(err => console.log(err));

function getValuesToInput(array) {
    let markup = [];
    array.map((element) => {
        markup.push(`<option value=${element.id}>${element.name}</option>`)
    });
    selectInputEl.innerHTML = markup.join(' ');
}

function checkInput(event) {
    fetchCatByBreed(event.target.value)
        .then(data => {
            let dataInfo = data[0].breeds[0];
            console.log(dataInfo);
            catItemEl.innerHTML = `
            <img src=${data[0].url} alt=${dataInfo.name} height=300/>
      
         <div class="cat-card">
          <h2 class="cat-name">${dataInfo.name}</h2>
          <p class="cat-desc">${dataInfo.description}</p>
          <p><span class="cat-mood">Temperament: </span>${dataInfo.temperament}</p>
         </div>`;
        }).catch(err => console.log(err));
}

