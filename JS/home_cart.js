//image gallery in banner
var i = 0;
var images = [];

var time = 3000;
images[0] = "img/banner1.png";
images[1] = "img/banner2.jpeg";
images[2] = "img/banner3.jpg";

function changeImage(){
    opacity = 1
    document.slide.src = images[i];
    
    if (i < images.length - 1) {
        i++
    }else{
        i = 0;
    }
    
    setTimeout("changeImage()", time);
}
window.onload = changeImage;

//change image in our customer service teams
var i2 = 0;
var images2 = [];
images2[0] = "img/salesman1.jpg";
images2[1] = "img/salesman2.jpg";
images2[2] = "img/salesman3.jpg";
function changeImage2(get){
    //document.getElementById('gggg').innerHTML = i2;
    if(get == -1){
        document.getElementById("b1").removeAttribute("disabled");
        if(i2 < images2.length-1 && i2 >= 0){
            i2++;
            document.salesman.src = images2[i2];
        }else{
            document.getElementById("b2").setAttribute("disabled","true");
            document.getElementById("b1").removeAttribute("disabled");
        }
    }else if(get == -2){
        document.getElementById("b2").removeAttribute("disabled");
        if(i2 > 0 && i2 <= images2.length-1){
            i2--;
            document.salesman.src = images2[i2];
        }else{
            document.getElementById("b1").setAttribute("disabled","true");
            document.getElementById("b2").removeAttribute("disabled");
        }
    }
}

function seeMore(get,dot){
    document.getElementById(get).removeAttribute("style");
    document.getElementById(dot).setAttribute("style","display:none");
    if(get == 'more1'){
        document.getElementById('more2').setAttribute("style", "display:none");
        document.getElementById('more3').setAttribute("style", "display:none");
        document.getElementById('dots2').removeAttribute("style");
        document.getElementById('dots3').removeAttribute("style");
    }else if(get == 'more2'){
        document.getElementById('more1').setAttribute("style", "display:none");
        document.getElementById('more3').setAttribute("style", "display:none");
        document.getElementById('dots1').removeAttribute("style");
        document.getElementById('dots3').removeAttribute("style");
    }else{
        document.getElementById('more1').setAttribute("style", "display:none");
        document.getElementById('more2').setAttribute("style", "display:none");
        document.getElementById('dots1').removeAttribute("style");
        document.getElementById('dots2').removeAttribute("style");
    }
}

//checkout images
function getSource(id){
    var src = document.getElementById(id).getAttribute("src");
    sessionStorage.setItem("src", src);
    sessionStorage.setItem("id", id);
    window.location = 'checkout.html';
}
