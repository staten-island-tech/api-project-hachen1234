const url = "	https://eldenring.fanapis.com/api/npcs?limit=1000";
const url2 = "https://eldenring.fanapis.com/api/bosses?limit=1000";
const url3 = "https://eldenring.fanapis.com/api/sorceries?limit=1000";
const url4 = "https://eldenring.fanapis.com/api/items?limit=1000";
const dom = {
  display: document.querySelector(".display"),
  displayCard: document.querySelector("#card"),
  npcbtn: document.querySelector(".npc"),
  bossesbtn: document.querySelector(".bosses"),
  sorceriesbtn: document.querySelector(".sorceries"),
  itemsbtn: document.querySelector(".items"),
  themebtn: document.querySelector(".theme"),
  searchinput: document.querySelector(".search-input"),
  search: document.querySelector(".search"),
};
function clear() {
  dom.display.innerHTML = "";
}

async function getdata(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  } catch (error) {
    document.querySelector("h1").textContent = "sad";
  }
}
let promise = getdata(url);
promise.then(function insertcard(data) {
  data.forEach((data) => {
    dom.display.insertAdjacentHTML(
      "beforeend",
      ` <div>
      <div class="card">
      <p class="subtitle">Name</p>
            <h3 class="name">${data.name}</h3>
            <img class="image"src="${data.image}" alt="">
            <p class="subtitle">Quote</p>
            <h3 class="description">${data.quote}</h3>
            <p class="subtitle">Location</p>
            <h3 class="text">${data.location}</h3>
            <div>
            `
    );
  });
});
dom.npcbtn.addEventListener("click", function () {
  clear();
  async function getdata(url) {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.data;
    } catch (error) {
      document.querySelector("h1").textContent = "sad";
    }
  }
  let promise = getdata(url);
  promise.then(function insertcard(data) {
    data.forEach((data) => {
      dom.display.insertAdjacentHTML(
        "beforeend",
        ` <div>
        <div class="card">
        <p class="subtitle">Name</p>
              <h3 class="name">${data.name}</h3>
              <img class="image"src="${data.image}" alt="">
              <p class="subtitle">Quote</p>
              <h3 class="description">${data.quote}</h3>
              <p class="subtitle">Location</p>
              <h3 class="text">${data.location}</h3>
              <div>
              `
      );
    });
  });
});
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
dom.itemsbtn.addEventListener("click", function () {
  clear();
  async function getdata(url4) {
    try {
      const response = await fetch(url4);
      const data = await response.json();
      return data.data;
    } catch (error) {
      document.querySelector("h1").textContent = "sad";
    }
  }
  let promise = getdata(url4);
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
              <div>
              `
      );
    });
  });
});
const searchinputvalue = dom.searchinput.addEventListener(
  "submit",
  function (e) {
    e.preventDefault();
    console.log(dom.search.value);
    clear();
  }
);
dom.searchinput.addEventListener("submit", async function getSearch() {
  try {
    let Url = `https://eldenring.fanapis.com/api/npcs?name=${dom.search.value}`;
    const response = await fetch(Url);
    const data = await response.json();

    data.data.forEach((data) => {
      dom.display.insertAdjacentHTML(
        "beforeend",
        ` <div>
        <div class="card">
        <p class="subtitle">Name</p>
              <h3 class="name">${data.name}</h3>
              <img class="image"src="${data.image}" alt="">
              <p class="subtitle">Quote</p>
              <h3 class="description">${data.quote}</h3>
              <p class="subtitle">Location</p>
              <h3 class="text">${data.location}</h3>
              <div>
              `
      );
    });
  } catch (error) {
    console.log(error);
  }
});
dom.searchinput.addEventListener("submit", async function getSearch() {
  try {
    let Url2 = `https://eldenring.fanapis.com/api/bosses?name=${dom.search.value}`;
    const response = await fetch(Url2);
    const data = await response.json();

    data.data.forEach((data) => {
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
  } catch (error) {
    console.log(error);
  }
});
dom.searchinput.addEventListener("submit", async function getSearch() {
  try {
    let Url3 = `https://eldenring.fanapis.com/api/sorceries?name=${dom.search.value}`;
    const response = await fetch(Url3);
    const data = await response.json();

    data.data.forEach((data) => {
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
              <p class="subtitle">Mana Cost</p>
              <h3 class="cost">${data.cost}</h3>
              <div>
              `
      );
    });
  } catch (error) {
    console.log(error);
  }
});
dom.searchinput.addEventListener("submit", async function getSearch() {
  try {
    let Url4 = `https://eldenring.fanapis.com/api/items?name=${dom.search.value}`;
    const response = await fetch(Url4);
    const data = await response.json();

    data.data.forEach((data) => {
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
              <div>
              `
      );
    });
  } catch (error) {
    console.log(error);
  }
});
