$('h1').click(function(){
    console.log("clicked");
    $('h1').hide();
})


$(document).ready(function() {
  // Hide the h1 element when clicked
  $('h1').click(function() {
    $(this).hide();
  });
  
  // Form submission event
  $('form').submit(function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var name = $('input[name="Name"]').val();
    var classYear = $('input[name="Class"]').val();
    var email = $('input[name="Email"]').val();
    var contact = $('input[name="Number"]').val();
    var gender = $('input[name="Gender"]:checked').val();
    var dob = $('input[name="DOB"]').val();
    var password = $('input[name="password"]').val();

    // Display the form values in the console
    console.log("Name:", name);
    console.log("Class:", classYear);
    console.log("Email:", email);
    console.log("Contact:", contact);
    console.log("Gender:", gender);
    console.log("DOB:", dob);
    console.log("Password:", password);

    // You can perform further actions with the form values here
    $('input[type="text"]').val('');
  $('input[type="number"]').val('');
  $('input[type="email"]').val('');
  $('input[type="radio"]').prop('checked', false);
  $('input[type="date"]').val('');
  $('input[type="password"]').val('');
  });
  
});
