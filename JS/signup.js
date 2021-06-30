function matchPasswords(){
    document.getElementById("pass_check").setAttribute("style","display:none");
    var pass_val = document.getElementById("pass").value;
    var cpass_val = document.getElementById("cpass").value;
    if(cpass_val.length > 0){
        if(pass_val == cpass_val && pass_val.length > 0 && cpass_val.length > 0){
            document.getElementById("match").setAttribute("style","display:inline");
            document.getElementById("mismatch").setAttribute("style","display:none");
        }else{
            document.getElementById("match").setAttribute("style","display:none");
            document.getElementById("mismatch").setAttribute("style","display:inline");
        }
    }else{
        document.getElementById("match").setAttribute("style","display:none");
        document.getElementById("mismatch").setAttribute("style","display:none");
    }
}

function passwordValidate(){
    var pass_val = document.getElementById("pass").value;
    if(pass_val.length > 0){
        document.getElementById("match").setAttribute("style","display:none");
        document.getElementById("mismatch").setAttribute("style","display:none");
        document.getElementById("pass_check").setAttribute("style","display:block");
        if(pass_val.length >= 12){
            document.getElementById("inc_char12_0").setAttribute("style","display:inline");
            document.getElementById("inc_char12_1").setAttribute("style","display:none");
        }else{
            document.getElementById("inc_char12_0").setAttribute("style","display:none");
            document.getElementById("inc_char12_1").setAttribute("style","display:inline");
        }

        if(/\d/.test(pass_val)){
            document.getElementById("inc_onenumber_0").setAttribute("style","display:inline");
            document.getElementById("inc_onenumber_1").setAttribute("style","display:none");
        }else{
            document.getElementById("inc_onenumber_0").setAttribute("style","display:none");
            document.getElementById("inc_onenumber_1").setAttribute("style","display:inline");
        }

        if(/[\! @#$%^*()_=+?:;<>,./|\&\\`~]/.test(pass_val)){
            document.getElementById("inc_charsp_0").setAttribute("style","display:inline");
            document.getElementById("inc_charsp_1").setAttribute("style","display:none");
        }else{
            document.getElementById("inc_charsp_0").setAttribute("style","display:none");
            document.getElementById("inc_charsp_1").setAttribute("style","display:inline");
        }

        if(/[a-z]/.test(pass_val)){
            document.getElementById("inc_lowercase_0").setAttribute("style","display:inline");
            document.getElementById("inc_lowercase_1").setAttribute("style","display:none");
        }else{
            document.getElementById("inc_lowercase_0").setAttribute("style","display:none");
            document.getElementById("inc_lowercase_1").setAttribute("style","display:inline");
        }

        if(/[A-Z]/.test(pass_val)){
            document.getElementById("inc_uppercase_0").setAttribute("style","display:inline");
            document.getElementById("inc_uppercase_1").setAttribute("style","display:none");
        }else{
            document.getElementById("inc_uppercase_0").setAttribute("style","display:none");
            document.getElementById("inc_uppercase_1").setAttribute("style","display:inline");
        }
    }else{
        document.getElementById("pass_check").setAttribute("style","display:none");
        document.getElementById("match").setAttribute("style","display:none");
        document.getElementById("mismatch").setAttribute("style","display:none");
    }
}


function seePassword(get){
    if (get == 1) {
        document.getElementById('icon').setAttribute("class", "fas fa-eye");
        document.getElementById('span').setAttribute("onclick", "seePassword(2)");
        document.getElementById('cpass').setAttribute("type", "text");
    }else {
        document.getElementById('icon').setAttribute("class", "fas fa-eye-slash");
        document.getElementById('span').setAttribute("onclick", "seePassword(1)");
        document.getElementById('cpass').setAttribute("type", "password");
    }
}
