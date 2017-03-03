//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times

//Hide hints
$("form span").hide();

function isPasswordValid(){
    if($("#password").val().length > 8){
        return true;
    }else{
        return false;
    }
}

function doesPasswordMatch(){
    if($("#password").val() === $("#confirm_password").val()){
        return true;
    }else{
        return false;
    }
}

function canSubmit(){
    return isPasswordValid() && doesPasswordMatch();
}

function passwordEvent(){
    if (isPasswordValid()){
        $("#password").next().hide();
    }else{
        $("#password").next().show();
    }
}

function confirmPasswordEvent(){
    if(doesPasswordMatch()){
        $("#confirm_password").next().hide();
    }else{
        $("#confirm_password").next().show();
    }
}

function enableSubmitEvent(){
    $("#submit").prop("disabled", !canSubmit());
}

//when event happens on password input
$("#password").focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

$("#confirm_password").focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
//when event happens on confirmation input
//find out if password and confirmation match
//hide hint if match
//if not, show hint
enableSubmitEvent();