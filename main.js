// Get the form element
var form = document.querySelector("form");

// Add a submit event listener
form.addEventListener("submit", function (e) {
  e.preventDefault(); // prevent the form from submitting to a server

  // Get the input values
  var name = form.elements.name.value;
  var email = form.elements.email.value;
  var message = form.elements.message.value;

  // Validate the input values
  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }

  // Send the form data to a server or process it in some other way
  // ...

  // Clear the form fields
  form.elements.name.value = "";
  form.elements.email.value = "";
  form.elements.message.value = "";

  // Show a message to the user
  alert("Thanks for contacting us! We'll get back to you soon.");
});
