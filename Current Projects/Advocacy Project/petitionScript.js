document.addEventListener("DOMContentLoaded", function () {
  const addSignature = (name, email) => {
    // You can customize this function to add the signature to your webpage
    console.log("Adding signature...");
    console.log("Name: " + name);
    console.log("Email: " + email);

    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = `Name: ${name}, Email: ${email}`;

    // Append the list item to the signature list
    const signatureList = document.getElementById("signatureList");
    signatureList.appendChild(listItem);

    // Clear the form inputs
    document.getElementById('namep').value = '';
    document.getElementById('Emailp').value = '';
  };

  const validateForm = () => {
    let containsErrors = false;
    const nameInput = document.getElementById('namep');
    const emailInput = document.getElementById('Emailp');

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // Validate the 'name' and 'email' fields
    if (name === '') {
      console.log("Name is empty");
      containsErrors = true;
      nameInput.classList.add('error'); // Assign the error class
    } else {
      nameInput.classList.remove('error'); // Remove the error class
    }

    if (email === '' || !email.includes('@') || !email.includes('.com')) {
      console.log("Invalid email");
      containsErrors = true;
      emailInput.classList.add('error'); // Assign the error class
    } else {
      emailInput.classList.remove('error'); // Remove the error class
    }

    if (containsErrors) {
      // Handle validation errors (e.g., display error messages)
    } else {
      addSignature(name, email); // Call addSignature if there are no errors
    }
  };

  // Add an event listener to the "Sign Now" button
  document.getElementById("petitionSubmit").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default form submission
    validateForm(); // Call the validation function
  });
});
