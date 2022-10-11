const switchBox = document.querySelector("#onoff");
const bulb = document.querySelector(".bulb");

function switchBulb(){
if (switchBox.checked === true){
    bulb.src ="./bulb-on.JPG";
}

else{
    bulb.src ="./bulb-off.JPG"
}

}

switchBox.addEventListener("click", switchBulb)