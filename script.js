function generatePassword() {
  let length = document.getElementById("length").value;
  let useUpper = document.getElementById("upper").checked;
  let useLower = document.getElementById("lower").checked;
  let useNumber = document.getElementById("number").checked;
  let useSymbol = document.getElementById("symbol").checked;

  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let numbers = "0123456789";
  let symbols = "!@#$%^&*()_+";

  let allChars = "";

  if (useUpper) allChars += upper;
  if (useLower) allChars += lower;
  if (useNumber) allChars += numbers;
  if (useSymbol) allChars += symbols;

  if (allChars === "") {
    alert("Select at least one option!");
    return;
  }

  let password = "";

  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * allChars.length);
    password += allChars[randomIndex];
  }

  document.getElementById("result").innerText = password;
}