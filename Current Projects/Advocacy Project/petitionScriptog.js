const formPetition = document.getElementById("Petition_box");

if (formPetition) {
  const validateFormPetition = (event) => {
    event.preventDefault(); // Prevent the default form submission
    console.log("Petition form submitted");

    // Get the form elements
    let elements = formPetition.elements;

    // Iterate over form elements and validate
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].value == "") {
        console.log("This is empty");
      } else {
        console.log("This input has some data");
        console.log(elements[i].value);
      }
    }
  };

document.getElementById("petitionSubmit").addEventListener("click", validateFormPetition);
}
