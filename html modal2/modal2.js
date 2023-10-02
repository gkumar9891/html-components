var active = document.getElementsByClassName("active_modal")[0];
	var content = document.getElementsByClassName("modal_content")[0];
active.addEventListener("click", function(){
	content.style.display="block";
	
});

window.onclick = function(event) {
	if(event.target.closest(".modal")){
      return;
	}
	else {
	   content.style.display="none";
	}
};

