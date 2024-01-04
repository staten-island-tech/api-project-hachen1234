const url = "https://eldenring.fanapis.com/api/bosses?limit=170";
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

promise.then(function (boss) {
  console.log(boss);
  function insertCard(boss) {
    return `<div class="card">
      <img src=${boss.image}.image}>
      <h2>${boss.name}</h2>
    </div>;`;
  }
  insertCard(boss);
});

boss.forEach((boss) => {
  dom.display.insertAdjacentHTML("afterbegin", insertCard(boss));
});
