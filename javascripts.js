var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;
document.getElementById("datepara").innerHTML = today;

function horoscopeCheck() {
  var inputDateOfBirth = document.getElementById("dateOfBirthClass").value;
  inputDateOfBirth = Math.random();
  console.log(inputDateOfBirth);
  if (inputDateOfBirth == 0) {
    document.getElementById("horoscopeContent").innerHTML =
      "We are so sorry!!! We are working on your horo working on your Horoscope";
  } else {
    document.getElementById("horoscopeContent").innerHTML =
      "We are working on your Horoscope";
  }
}
