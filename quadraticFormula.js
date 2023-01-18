$(document).ready(function() {
    $('#changeButton').click(function() {
      // get the values of A, B, and C from the input fields
      var a = $('#a').val();
      var b = $('#b').val();
      var c = $('#c').val();
  
      // calculate the roots of the quadratic equation
      var root1 = (-b + Math.sqrt(b*b - 4*a*c)) / (2*a);
      var root2 = (-b - Math.sqrt(b*b - 4*a*c)) / (2*a);
  
      // display the roots
      $('#title').text('Roots:');
      $('#description').text('Root 1: ' + root1 + ' Root 2: ' + root2);
    });
  });