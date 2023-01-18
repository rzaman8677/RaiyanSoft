$(document).ready(function(){
    $("#convert").click(function(){
      var inputText = $("#radiusInput").val();
      var outputText = "";
      for (var i = 0; i < inputText.length; i++) {
        if (i % 2 === 0) {
          outputText += inputText[i].toUpperCase();
        } else {
          outputText += inputText[i].toLowerCase();
        }
      }
      $("#newText").text("New Text: " + outputText);
    });
});  