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

/**
 * Checks if any of the input fields are empty and then applies red border stylimg around the empty fields
 * @param {*} inputs inputs entered in the form fields
 */
const checkIfEmpty = function (inputs) {
  for (let input of inputs) {
    if (input.value === "") {
      //checking if the input fields are empty
      input.classList.add("invalid_input"); //invalid_input class applies red border styling
    }
  }
};
const validateInput = function (inputs) {};
submitBtn.addEventListener("click", submitForm);
