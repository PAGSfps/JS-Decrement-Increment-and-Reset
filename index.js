const myTxtBox = document.getElementById("myTxtBox");
const myButton = document.getElementById("myButton");
const resultsElement = document.getElementById("resultsElement");

let age;

myButton.onclick = function(){
    age = myTxtBox.value; 

    if (age > 100){
        resultsElement.textContent = `You are too old to enter this site`;
    } else if (age === ""){
        resultsElement.textContent = `Please enter your age before submitting!`;
    } else if (age == 0){
        resultsElement.textContent = `You can't enter. You were just born`;
    } else if (age < 0){
        resultsElement.textContent = `Your age can't below 0`;
    } else if (age >= 18){
        resultsElement.textContent = `You can enter this site`;
    } else {
        resultsElement.textContent = `You must be 18+ to enter this site`;
    }
}