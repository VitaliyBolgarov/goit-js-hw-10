!function(){var n="https://api.thecatapi.com/v1";var t=document.querySelector(".breed-select"),e=document.querySelector(".cat-info");t.addEventListener("input",(function(t){(c=t.target.value,fetch("".concat(n,"/images/search?limit=10&breed_ids=").concat(c,"&api_key=").concat("live_hP6H204vpUdETEOaUdWpI7E2L2kyydQsb5iYRdJtdkjILdxbt3ZNy6JmQuLU9CwE")).then((function(n){if(!n.ok)throw new Error(n.statusText);return n.json()}))).then((function(n){var t=n[0].breeds[0];console.log(t),e.innerHTML="<img src=".concat(n[0].url," alt=").concat(t.name," width=500/>\n      <h2>").concat(t.name,"</h2>\n      <p>").concat(t.description,"</p>\n      <p>\n        <span>Temperament: </span>\n        ").concat(t.temperament,"\n      </p>")})).catch((function(n){return console.log(n)}));var c}));var c={};fetch("".concat(n,"/breeds")).then((function(n){if(!n.ok)throw new Error(n.statusText);return n.json()})).then((function(n){var e;c=n,console.log(c),e=[],c.map((function(n){e.push("<option value=".concat(n.id,">").concat(n.name,"</option>"))})),t.innerHTML=e.join(" ")})).catch((function(n){return console.log(n)}))}();
//# sourceMappingURL=index.0c3264f3.js.map
