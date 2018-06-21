 
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

function validateEmail( email ){
    //email = email.toLowerCase;
    //console.log(email);
    var cntAt = 0;
    for(var i = 0; i < email.length; i++){
        var char = email.charAt(i);
        //alert(char);
        if(char == '@'){
            cntAt++;
            //Multiple @
            if(cntAt > 1)
                return false;
            //Started or ended with @
            if(i == 0 || i == email.length - 1)
                return false;

        }else if(char == '.'){
            //Started or end with dot
            if(i == 0 || i == email.length - 1)
                return false;
            //An @ followed by dot or following a dot
            if(email.charAt(i - 1) == '@' || email.charAt(i + 1) == '@')
                return false;
        }
    }
    //Email must end with .com
    return email.endsWith(".com");
}

function validateAddress( address ){
    address = address.toLowerCase();
    var search = "street";
    return address.indexOf(search) !== -1;
}

function validation(){
    var form = document.forms["registration"].elements;
    var name = form["name"].value;
    var email = form["email"].value;
    var gender = form["gender"].value;
    var address = form["address"].value;
    var password = form["password"].value;
    var city = form["city"].value;
    //console.log("nama = " + name);
    //alert(address);
    var error = "";

    if ( name.length < 7 ){
        error = "Name must be atleast 7 characters";
    } else if( isNumber(name) ){
        error = "Name must not contain any numeric number";
    } else if ( !validateEmail(email) ){
        error = "Email is not valid";
    } else if ( alphaNumeric(password) == false ){
        error = "password must be alpha numeric";
    } else if ( !validateAddress( address ) ){
        error = "Address must contain street";
    }

    if (error == "" || error == null){
        //alert("Success");
        return true;
    }
    //alert(error);
    document.getElementById('error').innerHTML = error;
    return false;
}

