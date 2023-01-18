$(document).ready(function() {
    $('areaOutput').hide();
    $('circumferenceOutput').hide();
    $('#calculate').click(function() {  
        $radius = $('#radiusInput').val();
        $area = $radius * $radius * Math.PI;
        $circumference = 2 * $radius * Math.PI;
        $('#areaOutput').text("Area: " + $area);
        $('#circumferenceOutput').text("Circumference: " + $circumference);
        $('areaOutput').show();
        $('circumferenceOutput').show();
    });
});