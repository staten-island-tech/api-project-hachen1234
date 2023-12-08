async function getdata() {
  let res = await fetch("https://eldenring.fanapis.com/api/bosses?limit=1000");
  let data = await res.json();
  console.log(data);
}
getdata(data);
