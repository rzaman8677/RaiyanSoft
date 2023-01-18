$(document).ready(function() {
    var $min = $('#minInput');
    var $max = $('#maxInput');
    var $change = $('#changeButton');
    var $minVal;
    var $maxVal;
    $change.click(function() {
        if($min.val() == '' || $max.val() == '') {
            $min.val(0);
            $max.val(10);
        }
        else if($min.val() > $max.val()) {
            $min.val(0);
            $max.val(10);
        }
        else if($min.val() == $max.val()) {
            $min.val(0);
            $max.val(10);
        }
        else{
            $minVal = $min.val();
            $maxVal = $max.val();
        }
    });
    var $submit = $('#submitButton');
    var $next = $('#nextButton');
    var $skip = $('#skipButton');
    var $incorrect = $('#incorrect');
    var $correct = $('#correct');
    var $score = $('#userScore');
    var $problemNum = 0;
    var $scoreNum = 0;
    $score.text("User Score: " + $scoreNum + " / " + $problemNum);
    $next.hide();
    $incorrect.hide();
    $correct.hide();
    if($minVal == null || $maxVal == null) {
        $minVal = 0;
        $maxVal = 10;
    }
    var $random1 = Math.floor(Math.random() * ($maxVal - $minVal) + $minVal);
    var $random2 = Math.floor(Math.random() * ($maxVal - $minVal) + $minVal);
    var $answer = $random1 - $random2;
    var $userAnswer = $('#answerInput');
    var $question = $('#problem');
    $question.text($random1 + ' - ' + $random2 + ' = ');
    $submit.click(function() {
        if ($userAnswer.val() == $answer) {
            $correct.show();
            $incorrect.hide();
            $next.show();
            $submit.hide();
            $submit.prop('disabled', true);
            $skip.hide();
            $skip.prop('disabled', true);
            $scoreNum++;
            $problemNum++;
            $score.text("User Score: " + $scoreNum + " / " + $problemNum);
        } else {
            $incorrect.show();
            $correct.hide();
            $next.show();
            $submit.hide();
            $submit.prop('disabled', true);
            $skip.hide();
            $skip.prop('disabled', true);
            $problemNum++;
            $score.text("User Score: " + $scoreNum + " / " + $problemNum);
        }
    });
    $next.click(function() {
        $submit.prop('disabled', false);
        $skip.prop('disabled', false);
        if($minVal == null || $maxVal == null) {
            $minVal = 0;
            $maxVal = 10;
        }
        var $random1 = Math.floor(Math.random() * ($maxVal - $minVal) + $minVal);
        var $random2 = Math.floor(Math.random() * ($maxVal - $minVal) + $minVal);
        $answer = $random1 - $random2;
        $question.text($random1 + ' - ' + $random2 + ' = ');
        $userAnswer.val('');
        $next.hide();
        $submit.show();
        $skip.show();
        $incorrect.hide();
        $correct.hide();
    });
    $skip.click(function() {
        $submit.prop('disabled', false);
        $skip.prop('disabled', false);
        if($minVal == null || $maxVal == null) {
            $minVal = 0;
            $maxVal = 10;
        }
        var $random1 = Math.floor(Math.random() * ($maxVal - $minVal) + $minVal);
        var $random2 = Math.floor(Math.random() * ($maxVal - $minVal) + $minVal);
        $answer = $random1 - $random2;
        $question.text($random1 + ' - ' + $random2 + ' = ');
        $userAnswer.val('');
        $next.hide();
        $submit.show();
        $incorrect.hide();
        $correct.hide();
    });
});