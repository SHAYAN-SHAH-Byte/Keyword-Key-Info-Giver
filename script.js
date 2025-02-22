let binary = document.getElementById("binary");
let ascii = document.getElementById("ascii");
let key = document.getElementById("key");

document.addEventListener("keydown", function(e) {



    binary.innerText = e.keyCode.toString(2);
    ascii.innerText = e.keyCode;
    key.innerText = e.key;
   
    if(e.key == " ") {
        key.innerText = "Space";
       }
});