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
    return data.data;
  } catch (error) {}
}

const promise = getdata(url);

promise.then(function insertcard(data) {
  data.forEach((data) => {
    dom.display.insertAdjacentHTML(
      "afterbegin",
      ` 
      <div class="card">
            <h2 class="name">${data.name}</h2>
            <img class="image"src="${data.image}" alt="">
      
          
            `
    );
  });
});
