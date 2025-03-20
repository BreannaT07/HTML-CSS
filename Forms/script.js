document.getElementById('feedbackForm').addEventListener
('submit', function(e){e.preventDefault(); //Prevents the form fro submitting immediately

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

    else 
    {
        alert("Form Submitted.")
    }

    // Int Types
    if (age === '' || phoneNumber === '' || zipCode === '')
    {
        alert("Please fill out this section.")
    }

    age = x;
    let x = 18;

    if (x < 18)
    {
        alert("You need to be above the age of 18.")
    }

    else 
    {
        
    }

});