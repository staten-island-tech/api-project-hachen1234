const url = "https://eldenring.fanapis.com/api/sorceries";

async function getdata(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {}
}
getdata(url);

getdata(url);
