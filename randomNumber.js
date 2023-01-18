$(document).ready(function() {
    var $min = $('#minInput');
    var $max = $('#maxInput');
    var $change = $('#changeButton');
    $change.click(function() {
        var min = $min.val();
        var max = $max.val();
        var $negative;
        if(min > max){
            var $temp = min;
            min = max;
            max = $temp;
        }
        if(min == max){
            max = max + 1;
        }
        if(min <= 0){
            var $negative = true;
        }
        else{
            var $negative = false;
        }
        var $randomNumber;
        if($negative == true){
            if(min * -1 > max){
                $randomNumber = Math.floor(Math.random() * (-1 * min)) + 1;
            } 
            else{
                $randomNumber = Math.floor(Math.random() * max) + 1;
            }
            var $negativeRandom = Math.floor(Math.random() * 2);
            if($negativeRandom == 0){
                $randomNumber = $randomNumber * -1;
            }
        }
        else{
            $randomNumber = Math.floor(Math.random() * max) + 1;
        }
        while ($randomNumber < min) {
            var $difference = max - $randomNumber;
            var $differenceRandom = Math.floor(Math.random() * $difference) + 1;
            $randomNumber = $randomNumber + $differenceRandom;
        }
        while($randomNumber > max){
            var $difference = max - min;
            var $differenceRandom = Math.floor(Math.random() * $difference) + 1;
            console.log("Difference Random: " + $differenceRandom);
            $randomNumber = $randomNumber - $differenceRandom;
        }
        $('#randomNumber').text("Your random number is: " + $randomNumber);
    });
});