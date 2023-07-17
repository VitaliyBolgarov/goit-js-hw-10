// import axios from "axios";
// axios.defaults.headers.common["x-api-key"] = "live_hP6H204vpUdETEOaUdWpI7E2L2kyydQsb5iYRdJtdkjILdxbt3ZNy6JmQuLU9CwE";
// import Notiflix from "notiflix";

// const selectInputEl = document.querySelector('.breed-select');
// const catItemEl = document.querySelector('.cat-info');
// const loaderEl = document.querySelector('.loader');

// selectInputEl.addEventListener('input', checkInput);

// let allCatsArray = {};

// fetchBreeds().then(data => {
//     allCatsArray = data;
//     getValuesToInput(allCatsArray);
//     loaderEl.classList.add('hidden');
// }).catch(err => Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!'));

// function getValuesToInput(array) {
//     let markup = [];
//     array.map((element) => {
//         markup.push(`<option value=${element.id}>${element.name}</option>`)
//     });
//     selectInputEl.innerHTML = markup.join(' ');
//     // new SlimSelect({
//     //   select: selectInputEl
//     // } )
// }

// function checkInput(event) {
//     loaderEl.classList.remove('hidden');
//     fetchCatByBreed(event.target.value)
//         .then(data => {
//             let dataInfo = data[0].breeds[0];
//             createCatMarkup(data, dataInfo);
//             loaderEl.classList.add('hidden');
//         }).catch(err => Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!'));
// }

// function createCatMarkup(data, dataInfo) {
//     catItemEl.innerHTML = `<img class="cat-img" src=${data[0].url} alt=${dataInfo.name} width=500/>
//   <div class="info-wrapper">
//     <h2>${dataInfo.name}</h2>
//     <p>${dataInfo.description}</p>
//       <p>
//         <span>Temperament:</span>
//         ${dataInfo.temperament}
//       </p>
//     </div>`;
// }