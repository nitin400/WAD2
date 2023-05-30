$(document).ready(function() {
    // Submit event handler for the form
    $('form').submit(function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Retrieve form values
        var fullName = $('input[name="fullName"]').val();
        var email = $('input[name="email"]').val();
        var phoneNumber = $('input[name="phoneNumber"]').val();
        var gender = $('input[name="gender"]:checked').val();
        var dob = $('input[name="dob"]').val();
        var password = $('input[name="password"]').val();
        
        // Do something with the form values (e.g., validation, AJAX submission)
        console.log('Full Name:', fullName);
        console.log('Email:', email);
        console.log('Phone Number:', phoneNumber);
        console.log('Gender:', gender);
        console.log('DOB:', dob);
        console.log('Password:', password);
        
        
        
        // Clear form fields
        $('input[type="text"], input[type="email"], input[type="number"], input[type="date"], input[type="password"]').val('');
    });
});

