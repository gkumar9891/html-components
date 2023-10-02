var click = document.getElementsByClassName("dropdown_parent")[0];
click.addEventListener("click",function() {
	var h = document.getElementsByClassName("dropdown_content")[0];
	h.classList.toggle("active");
});

window.onclick = function(event) {
	gett = document.getElementsByClassName("dropdown_parent")[0];
	if(event.target != gett) {
	    var dropdown = document.getElementsByClassName("dropdown_content");
	     var i;
		 for(i=0; i < dropdown.length; i++)
		 {
			 if(dropdown[i].classList.contains("active"))
			 {
				 dropdown[i].classList.remove("active");
			 }
		 }
	}
}