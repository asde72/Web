const formSuggest = document.getElementById("Suggestions_Box");

if (formSuggest) {
  const validateFormSuggest = (event) => {
    event.preventDefault(); // Prevent the default form submission
    console.log("Suggestions form submitted");

    // Get the form elements
    let elements = formSuggest.elements;

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

  document.getElementById("suggestionsSubmit").addEventListener("click", validateFormSuggest);
}
