



// Use the DOM method `.getElementById()` to find your form
const formPetition = document.querySelector(".petition-input #Petition_box"); 
//
const formSuggest = document.querySelector(".form-container #Suggestions_Box");

const validateFormPetition = (event) => {
  //stop reloading when submit is pressed
  event.preventDefault();
  // Get the form elements
  let elements = formPetition.elements 
// Create your for loop
  for (let i = 0; i < elements.length; i++) {
    // Print out i for each loop run
     // console.log("This is the value of i: " + i);
    if (elements[i].value == "") {
      console.log("This is empty");
    } else {
        console.log("This imput has some data");
        console.log(elements[i].value);
    }
  }
};
const validateFormSuggest = (event) => {
  //stop reloading when submit is pressed
  event.preventDefault();
  // Get the form elements
  let elements = formSuggest.elements;
// Create your for loop
  for (let i = 0; i < elements.length; i++) {
    // Print out i for each loop run
     // console.log("This is the value of i: " + i);
    if (elements[i].value == "") {
      console.log("This is empty");
    } else {
        console.log("This imput has some data");
        console.log(elements[i].value);
    }
  }
};

// Add the an event listener to validate your form
formPetition.addEventListener("submit", validateFormPetition);
formSuggest.addEventListener("submit", validateFormSuggest);
