const e=document.querySelector(".breed-select"),t=document.querySelector(".cat-info");e.addEventListener("input",(function(e){(n=e.target.value,fetch(`https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${n}&api_key=live_hP6H204vpUdETEOaUdWpI7E2L2kyydQsb5iYRdJtdkjILdxbt3ZNy6JmQuLU9CwE`).then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()}))).then((e=>{let n=e[0].breeds[0];console.log(n),t.innerHTML=`\n            <img src=${e[0].url} alt=${n.name} height=300/>\n      \n         <div class="cat-card">\n          <h2 class="cat-name">${n.name}</h2>\n          <p class="cat-desc">${n.description}</p>\n          <p><span class="cat-mood">Temperament: </span>${n.temperament}</p>\n         </div>`})).catch((e=>console.log(e)));var n}));let n={};fetch("https://api.thecatapi.com/v1/breeds").then((e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})).then((t=>{n=t,console.log(n),function(t){let n=[];t.map((e=>{n.push(`<option value=${e.id}>${e.name}</option>`)})),e.innerHTML=n.join(" ")}(n)})).catch((e=>console.log(e)));
//# sourceMappingURL=index.defe4542.js.map
