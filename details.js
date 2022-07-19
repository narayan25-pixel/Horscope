const urlParams = new URLSearchParams(location.search);
var paramSign;
for (const [key, value] of urlParams) {
  var paramSign = value;
  console.log(paramSign);
}

var details = {
  AQUARIS: {
    image: "./images/Aries.jpg",
  },
  PISCES: {
    image: "./images/pisces.jpg",
  },
  CANCER: {
    image: "./images/Cancer.webp",
  },
  ARIES: {
    image: "./images/Aries.jpg",
  },
  TAURUS: {
    image: "./images/taurus.jpg",
  },
  GEMINI: {
    image: "./images/gemini.webp",
  },
  LEO: {
    image: "./images/leo.jpg",
  },
  VIRGO: {
    image: "./images/virgo.jpg",
  },
  LIBRA: {
    image: "./images/libra.jpg",
  },
  SCORPIO: {
    image: "./images/scorpio.jpg",
  },
  SAGITTARIUS: {
    image: "./images/sagittarius.jpg",
  },
  CAPRICON: {
    image: "./images/capricon.jpg",
  },
};

function paintFunction(sign) {
  fetch("https://demo4919493.mockable.io/signs", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      response.json().then((data) => {
        console.log(data[sign]);
        document.getElementById("descriptionSign").innerHTML = data[sign];

        document.getElementById("signImage").src =
          details[sign.toUpperCase()].image;
      });
    })
    .catch((error) => {
      console.log("H");
      console.log(error);
    });
}
function findSign(d) {
  var date = new Date(d);
  var days = [21, 20, 21, 21, 22, 22, 23, 24, 24, 24, 23, 22];
  var signs = [
    "Aquarius",
    "Pisces",
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
  ];
  var month = date.getMonth();
  var day = date.getDate();
  if (month == 0 && day <= 20) {
    month = 11;
  } else if (day < days[month]) {
    month--;
  }
  return signs[month].toLowerCase();
}

function find2() {
  // var val = document.getElementById("dateOfBirthClass").value;
  let val = window.localStorage.getItem("inputDateofBirth");
  console.log(val);
  var sign = findSign(val);
  console.log(sign);
  paintFunction(sign);
  // console.log(details[sign.toUpperCase()].image);
}

// paintFunction(paramSign);
if (paramSign == undefined) {
  find2();
} else {
  paintFunction(paramSign);
}
