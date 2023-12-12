const url2 = "https://eldenring.fanapis.com/api/bosses?limit=1000";
const url3 = "https://eldenring.fanapis.com/api/sorceries?limit=1000";
const dom = {
  display: document.querySelector(".display"),
  displayCard: document.querySelector("#card"),
  bossesbtn: document.querySelector(".bosses"),
  sorceriesbtn: document.querySelector(".sorceries"),
};
function clear() {
  dom.display.innerHTML = "";
}
dom.bossesbtn.addEventListener("click", function () {
  clear();
  async function getdata(url2) {
    try {
      const response = await fetch(url2);
      const data = await response.json();
      return data.data;
    } catch (error) {
      document.querySelector("h1").textContent = "sad";
    }
  }
  let promise = getdata(url2);
  promise.then(function insertcard(data) {
    data.forEach((data) => {
      dom.display.insertAdjacentHTML(
        "beforeend",
        ` <div>
        <div class="card">
        <p class="subtitle">Name</p>
              <h3 class="name">${data.name}</h3>
              <img class="image"src="${data.image}" alt="">
              <p class="subtitle">Description</p>
              <h3 class="description">${data.description}</h3>
              <p class="subtitle">Location</p>
              <h3 class="text">${data.location}</h3>
              <p class="subtitle">Drops</p>
              <h3 class="drops">${data.drops}</h3>
              <div>
              `
      );
    });
  });
});
dom.sorceriesbtn.addEventListener("click", function () {
  clear();
  async function getdata(url3) {
    try {
      const response = await fetch(url3);
      const data = await response.json();
      return data.data;
    } catch (error) {
      document.querySelector("h1").textContent = "sad";
    }
  }
  let promise = getdata(url3);
  promise.then(function insertcard(data) {
    data.forEach((data) => {
      dom.display.insertAdjacentHTML(
        "beforeend",
        ` 
        <div>
  
        <div class="card">
        <p class="subtitle">Name</p>
              <h3 class="name">${data.name}</h3>
              <img class="image"src="${data.image}" alt="">
              <p class="subtitle">Description</p>
              <h3 class="description">${data.description}</h3>
              <p class="subtitle">Effects</p>
              <h3 class="text">${data.effects}</h3>
              <p class="subtitle">Drops</p>
              <h3 class="cost">${data.cost}</h3>
              <div>
              `
      );
    });
  });
});
