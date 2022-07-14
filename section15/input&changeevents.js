const creditCard = document.querySelector("#credit-card");
const termsChecked = document.querySelector("#terms-checked");
const veggieSelect = document.querySelector("#veggie-select");

const formData = {};
/*
const formData = {}
for(let input of [creditCard, termsChecked, veggieSelect]) {
    input.addEventListener('input', ({target }) => {
        const {name, type, value, checked} = target;
        formData[name] = type === 'checkbox' ? checked : value;
    })
}
*/

creditCard.addEventListener("input", (e) => {
  console.log("cc changed", e);
  formData["creditCard"] = e.target.value;
});

veggieSelect.addEventListener("input", (e) => {
  console.log("veggie changed", e);
  formData["veggie"] = e.target.value;
});

termsChecked.addEventListener("input", (e) => {
  console.log("terms changed", e);
  formData["termsChecked"] = e.target.checked;
});
