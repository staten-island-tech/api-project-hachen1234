const url = "https://eldenring.fanapis.com/api/bosses?limit=1000";
const url2 = "https://eldenring.fanapis.com/api/sorceries?limit=1000";
const dom = {
  display: document.querySelector(".display"),
  displayCard: document.querySelector("#card"),
};

async function getdata(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.data);
    return data.data;
  } catch (error) {
    document.querySelector("h1").textContent = "sad";
  }
}

const promise = getdata(url);

promise.then(function insertcard(data) {
  data.forEach((data) => {
    dom.display.insertAdjacentHTML(
      "beforeend",
      ` 
      <div class="card">
            <h2 class="name">${data.name}</h2>
            <img class="image"src="${data.image}" alt="">
            <h3 class="text">${data.description}</h3>
            <p class="text">${data.location}</p>
            `
    );
  });
});
