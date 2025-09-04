const increaseBtn = document.getElementById("increasmentbtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decrementBtn");
const CountLabel = document.getElementById("CounLabel");

let count = 0;

increaseBtn.onclick = function(){
    count++;
    CountLabel.textContent = count

}    
