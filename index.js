const fs = require("fs");
console.log(fs);

const submitBtn = document.querySelector(".btn-submit");
const inputs = document.querySelectorAll("input"); //get all the inputs

/**
 * does all the logic
 * @param {*} e event attached to the submit event
 */
const submitForm = function (e) {
  e.preventDefault();
  const formInputs = Array.from(inputs);
  checkIfEmpty(formInputs);
  //   inputs.map((input) => console.log(input.value));
  //check if empty
  //if empty add invalid style
  //validate
};

const checkIfEmpty = function (inputs) {
  for (let input of inputs) {
    if (input.value === "") {
      input.classList.add("invalid_input");
    }
  }
};
submitBtn.addEventListener("click", submitForm);
