//buttons
const cancelBtn = document.querySelector(".btn_cancel"); //form cancel button
const prevBtn = document.querySelector(".btn_prev"); //previous page button
const printBtn = document.querySelector(".btn_print"); //print page button
// submit form on click
cancelBtn.addEventListener("click", () => window.close()); //close the current tab
prevBtn.addEventListener("click", () => {
  fetch("");
}); //go back to page on click
printBtn.addEventListener("click", downloadI94Pdf); //download i94 as pdf

/**
 * checkIfEmpty - check if the any of the input fields in the form is empty
 * Checks if any of the input fields are empty and then apply red border stylimg around the empty fields
 * @param {*} formInputFields input fields in the form
 */
function checkIfEmpty(formInputFields) {
  for (let input of formInputFields) {
    if (input.value === "") {
      //checking if the input fields are empty
      input.classList.add("invalid_input"); //invalid_input class applies red border styling
    }
  }
}

/**
 * downloadI94Pdf: downloads the I-94 form
 */
function downloadI94Pdf() {
  const i94Container = document.querySelector("#container_i94");

  html2pdf().from(i94Container).save(); //download the pdf using 194 container as template
}
