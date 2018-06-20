 
function isAlpha( password ){
 
    for ( var i = 0; i < password.length; i++ ){
        var char = password.charAt(i).toLowerCase();
        if ( char <= 'z' && char >= 'a' ) return true;
    }
    return false;
}
 
function isNumber( password ){
    for ( var i = 0; i < password.length; i++ ){
        var char = password.charAt(i);
        if ( char >= '0' && char <= '9' ) return true;
    }
    return false;
}


function alphaNumeric( password ){
    return isAlpha(password) && isNumber(password);
}

function validation(){
    var form = document.forms["registration"].elements;
    var name = form["name"].value;
    //var email = form["email"].value;
    var gender = form["gender"].value;
    var address = form["address"].value;
    var password = form["password"].value;
    var city = form["city"].value;
    // console.log("nama  = " + name);
    // alert(address);
    var error = "";
    if ( name == "" ){
        error = "Name must be filled";
    } else if ( name.length < 7 ){
        error = "Name must be atleast 7 characters";
    } else if ( alphaNumeric(password) == false ){
        error = "password must be alpha numeric";
    } else if ( gender == "" ){
        error = "Gender must be choosen";
    }else if ( city == "" ){
        error = "Country must be selected";
    }

    if (error == "" || error == null) alert("Success");
    //alert(error);
    document.getElementById('error').innerHTML = error;
    return false;
}

