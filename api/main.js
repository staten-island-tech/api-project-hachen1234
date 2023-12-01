const url = "https://eldenring.fanapis.com/api/sorceries?limit=71";
const dom = {
  display: document.querySelector(".display"),
};

async function getdata(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {}
}
getdata(url);
