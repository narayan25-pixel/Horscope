var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;
document.getElementById("datepara").innerHTML = today;

function getDetails(sign) {
  var details = {
    AQUARIUS: {
      image: "",
      description: "you are AQUARIUS",
    },
    PISCES: {
      image: "",
      description: "you are PISCES",
    },
    CANCER: {
      image: "",
      description: "you are CANCER",
    },
    ARIES: {
      image: "",
      description: "you are ARIES",
    },
    TAURES: {
      image: "",
      description: "you are TAURUS",
    },
    GEMINI: {
      image: "",
      description: "you are GEMINI",
    },
    LEO: {
      image: "",
      description: "you are LEO",
    },
    VIRGO: {
      image: "",
      description: "you are VIRGO",
    },
    LIBRA: {
      image: "",
      description: "you are LIBRA",
    },
    SCORPIO: {
      image: "",
      description: "you are SCORPIO",
    },
    SAGITTARIUS: {
      image: "",
      description: "you are SAGITTARIUS",
    },
    CAPRICORN: {
      image: "",
      description: "you are CAPRICORN",
    },
  };

  if (details.hasOwnProperty(sign)) {
    return details[sign];
  }
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
  if (month === 0 && day <= 20) {
    month = 11;
  } else if (day < days[month]) {
    month--;
  }
  return signs[month].toUpperCase();
}

function find() {
  var val = document.getElementById("dateOfBirthClass").value;
  var sign = findSign(val);
  var det = getDetails(sign);
  document.getElementById("horoscopeContent").innerHTML = det.description;
  document.getElementById("horoscopeImage").innerHTML = det.image;
}
