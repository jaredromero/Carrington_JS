function setClickHandlers(){
	var cardsArray = document.getElementById("card-container").getElementsByClassName('card');
	var flip = function () {
		for (var j = 0; j < cardsArray.length; j++) {
			cardsArray[j].innerHTML = "down";
		}
	}

  	for (var i = 0; i < cardsArray.length; i++) {
      	cardsArray[i].addEventListener('click', function(e){
        	if (e.target.innerHTML === "down") {
	        	flip();
	        	e.target.innerHTML = "up";
	        } else {
	       		e.target.innerHTML = "down";
	        }
      	})
	}
}

setClickHandlers();