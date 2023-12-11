const url = "https://eldenring.fanapis.com/api/bosses?limit=1000";
const url2 = "https://eldenring.fanapis.com/api/sorceries?limit=1000";
const dom = {
  display: document.querySelector(".display"),
  displayCard: document.querySelector("#card"),
  bossesbtn: document.querySelector(".bosses"),
};

async function getdata(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    console.log(data.data);
    return data.data;
  } catch (error) {
    document.querySelector("h1").textContent = "sad";
  }
}

dom.bossesbtn.addEventListener("click", function () {
  let promise = getdata(url);
  promise.then(function insertcard(data) {
    data.forEach((data) => {
      dom.display.insertAdjacentHTML(
        "beforeend",
        ` 
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
              `
      );
    });
  });
});
