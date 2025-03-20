document.getElementById('feedbackForm').addEventListener
('submit', function(e){e.preventDefault(); //Prevents the form from submitting immediately

    const fullName = document.getElementById('fullName').value;
    const age = parseInt(document.getElementById('age').value);
    const phoneNumber = parseInt(document.getElementById('phoneNumber').value);
    const cityName = document.getElementById('cityName').value;
    const streetName = document.getElementById('streetName').value;
    const zipCode = parseInt(document.getElementById('zipCode').value);
    const email = document.getElementById('email').value;
    const feedbackMessage = document.getElementById('feedbackMessage').value;

    // Text Types
    if (fullName === '' || cityName === '' || streetName === '' || email === '' || feedbackMessage === '')
    {
        alert("Please fill out this section.")
    }

    else {}

    // Int Types
    if (age === '' || phoneNumber === '' || zipCode === '')
    {
        alert("Please fill out this section.")
    }

    else {}

    // Age Requirements
    Number.parseInt(age, 18)


    if (age = NaN) {
        alert("You need numbers.");
      } else if (age < 5) {
        alert("You need to be above the age of 18.");
      }     else {}

    // Phone Number Requirements
    phoneNumber = Number(true);

    if (Number(false));
    {
        alert("You need to type in numbers.")
    }

    // Zip Code Requirements
    Number.parseInt(zipCode, 5)
    
    if (zipCode = NaN) {
        alert("You need numbers.");
      } else if (zipCode < 5) {
        alert("You need 5 numbers.");
      } else if (zipCode > 5) {
        alert("You need 5 numbers.");
      }     else {}


});