window.Font = function(e) {
    if (document.body.style.fontSize == "") {
        document.body.style.fontSize = "1.0em";
      }
      
    if(e=="aumentar"){
        document.body.style.fontSize = parseFloat(document.body.style.fontSize) + (1 * 0.2) + "em";
    }
    else if(e=="diminuir"){
        document.body.style.fontSize = parseFloat(document.body.style.fontSize) - (1 * 0.2) + "em";
    }
}