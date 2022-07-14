const form = document.querySelector("#signup-form");
const creditCard = document.querySelector("#cc");
const termsCheck = document.querySelector("#terms");
const veggieSelect = document.querySelector("#veggie");

form.addEventListener("submit", function (e) {
  alert("Thanks for signing up!");
  console.log(e);
  console.log("cc", creditCard.value);
  console.log("terms", termsCheck.checked);
  console.log("veggie", veggieSelect.value);
  e.preventDefault(); //prevents the page from refreshing
});
