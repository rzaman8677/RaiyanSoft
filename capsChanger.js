$(document).ready(function() {
    $("form").submit(function(e) {
      e.preventDefault();
    });
    $("#convert").click(function() {
      var inputText = $("#radiusInput").val();
      $("#upperText").text("Uppercase: " + inputText.toUpperCase());
      $("#lowerText").text("Lowercase: " + inputText.toLowerCase());
    });
});