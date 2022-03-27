//buttons
const submitBtn = document.querySelector(".btn-submit");

//eventlisteners
submitBtn.addEventListener("click", submitForm); // listen for submit button click

//functions
/**
 * submitForm: processes and validates the form and provides I94 if we have a data match in our records
 * @param {*} event event attached to the submit event
 */
function submitForm(event) {
  event.preventDefault(); //prevent the browser from refreshing everytime we submit

  //Selecting elements
  const body = document.querySelector("body"); //main body
  const formContainer = document.querySelector("#container_form");
  const travelerInfoTab = document.querySelector(".tab_traveler-info");
  const i94ResultsTab = document.querySelector(".tab_i94-results");

  //select the input fields
  const inputs = document.querySelectorAll("input"); //get all the inputs
  const formInputFields = Array.from(inputs); //convert the NodeList<Input> into array

  //i94 records and template
  const i94Records = [
    //i94 records saved in the system
    //data
    {
      firstName: "John",
      lastName: "Murphy",
      dob: "03/4/1936",
      document: 448799,
      country: "USA",
    },
    {
      firstName: "Vivek",
      lastName: "Murty",
      dob: "04/1/1936",
      document: 4486689,
      country: "India",
    },
    {
      firstName: "Chin",
      lastName: "Muai",
      dob: "03/7/1968",
      document: 448893,
      country: "China",
    },
    {
      firstName: "Nitin",
      lastName: "Bhure",
      dob: "02/2/1963",
      document: 4348893,
      country: "India",
    },
  ];
  const i94Template = `<section id="container_i94" class="container">
<header class="header_i94">
  <h1 class="title title_container">Most Recent I94-Results</h1>
  <article class="user-info">
    <span class="material-icons user-icon">person</span>
    <p>For: <h3>{%FIRSTNAME%} {%LASTNAME%}</h3></p>
  </article>
</header>
<article class="i94">
  <h4>Most Recent I-94</h4>
  <hr>
  <p>
    Admission (I-94) Record Number : 445039962A2 <br>
    Most Recent Date of Entry: 2020 January 16 <br>
    Class of Admission : F1 <br>
    Admit Until Date : D/S <br>
    Details provided on the I-94 Information form:<br>
  </p>
  <p class="user-data">
    Last/Surname : {%LASTNAME%} <br>
    First (Given) Name : {%FIRSTNAME%} <br>
    Birth Date : {%YEAR%} {%MONTH%} {%DAY%} <br>
    Document Number :{%DOCUMENTNO%} <br>
    Country of Citizenship :{%COUNTRY%}
  </p>
</article>
<hr>
<article class="i94-btns">
  <button class="btn btn_i94 tn_prev"><span style="display: inline;" class="material-icons">
    arrow_back_ios
    </span>PREV</button>
  <button class="btn btn_i94 btn_print ">
    <span style="display: inline;" class="material-icons">
      print
      </span>PRINT</button>
</article>
                       </section>`; //i94 template to be filled with user data

  //check if any input fields are empty
  checkIfEmpty(formInputFields);

  //validate input to see if it matches any records
  if (validInput(formInputFields, i94Records)) {
    //hide form and show i94 records
    formContainer.classList.add("inactive"); //hide the form container
    travelerInfoTab.classList.remove("tab-active"); //set the info tab to be inactive
    i94ResultsTab.classList.add("tab-active"); //set the i94 tab to be active

    //make an i94 template using user data from the form inputs
    const i94 = getUserTemplate(i94Template, formInputFields); //make the i94 form using user data
    body.insertAdjacentHTML("beforeend", i94); //insert the i94 section in body
  } else {
    alert("Record not found!!");
    clearFields(); //clear all fields
  }
}

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
 * validInput: checks if the given input data matches any of our I94 records
 * @param {*} formInputFields form input fields that need to be checked if it matches with any I94 records
 * @param {*} i94Records i94 data records to be checked against for potential match
 * @returns true if valid input and false otherwise
 */
function validInput(formInputFields, i94Records) {
  for (let record of i94Records) {
    if (matchRecords(record, formInputFields)) return true;
  }
  return false;
}

/**
 * matchRecords: checks if the given input data and record data have the same data
 * @param {*} record record to be checked
 * @param {*} inputs inputs fields data to be checked against
 * @returns true if the properties match and false otherwise
 */
function matchRecords(record, inputs) {
  const [day, month, year] = record.dob.split("/");

  if (
    record.firstName === inputs[0].value &&
    record.lastName === inputs[1].value &&
    +inputs[2].value === +day &&
    +inputs[3].value === +month &&
    +inputs[4].value === +year &&
    +inputs[5].value === record.document &&
    inputs[6].value === record.country
  )
    return true;
  else return false;
}

/**
 * populates the i94 template with user data
 * @param {*} template i94 template
 * @param {*} inputs user data from the form input
 * @returns i94 template filled with the provided user data
 */
function getUserTemplate(template, inputs) {
  let temp = template;
  //go through every input data and replace the associated regex with its corresponding value
  for (let input of inputs) {
    let propertyName = `{%${input.name}%}`.toUpperCase(); //get the regex using input name
    temp = temp.replaceAll(propertyName, input.value.toUpperCase()); //replace the regex with corresponding input value
  }
  return temp;
}
