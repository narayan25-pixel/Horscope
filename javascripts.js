var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = mm + "/" + dd + "/" + yyyy;
document.getElementById("datepara").innerHTML = today;

function find() {
  var val = document.getElementById("dateOfBirthClass").value;
  localStorage.setItem("inputDateofBirth", val);
}
