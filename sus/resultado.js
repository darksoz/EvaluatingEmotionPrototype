function getRandomResult(){
    var randomNumber = Math.floor(Math.random() * 101); 
    document.getElementById("one").innerHTML = `SUS Score: ${randomNumber}`;
}