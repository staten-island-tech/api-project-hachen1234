const url = "https://eldenring.fanapis.com/api/bosses?limit=170";
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
