function seePassword(get){
    if (get == 1) {
        document.getElementById('icon').setAttribute("class", "fas fa-eye");
        document.getElementById('span').setAttribute("onclick", "seePassword(2)");
        document.getElementById('password').setAttribute("type", "text");
    }else {
        document.getElementById('icon').setAttribute("class", "fas fa-eye-slash");
        document.getElementById('span').setAttribute("onclick", "seePassword(1)");
        document.getElementById('password').setAttribute("type", "password");
    }
}
