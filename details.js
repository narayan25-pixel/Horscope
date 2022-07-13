const urlParams = new URLSearchParams(location.search);
// var paramSign;

// for (const [key, value] of urlParams) {
//   const paramSign = value;
//   //   paramSign = "'" + paramSign + "'";
//   //   console.log(`${key}:${value}`);
//   console.log(paramSign);
//   console.log(typeof paramSign);
// }

fetch("https://demo4919493.mockable.io/signs", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    response.json().then((data) => {
      var paramSign;
      for (const [key, value] of urlParams) {
        var paramSign = value;
      }
      //   document.getElementById("signImage").src = "./images/leo.jpg";
      //   document.getElementById("signImage").alt = paramSign;
      document.getElementById("signPara").innerHTML = paramSign.toUpperCase();
      document.getElementById("description").innerHTML = data[paramSign];
    });
  })
  .catch((error) => {
    console.log("H");
    console.log(error);
  });
