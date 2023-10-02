var dropdown = document.getElementsByClassName("dropdown_parent")[0];
dropdown.addEventListener("click", function(){
	var content = document.getElementsByClassName("dropdown_content")[0];
	content.classList.toggle("active");
});


var input = document.getElementById("input");
input.addEventListener("keyup", function(){
	var filter = input.value.toUpperCase();
	var item = document.getElementsByClassName("filter_item");
	var i = 0;
	for(i; i < item.length; i++) {
		item_text = item[i].innerHTML;
		if(item_text.toUpperCase().indexOf(filter) > -1) {
			
			item[i].style.display="block";
		}
		
		else {
            item[i].style.display="none";	
		}
	}
	
});

window.onclick = function(event) {
	console.log(event.target);
	var gett = document.getElementsByClassName("dropdown_parent")[0];
	var content = document.getElementsByClassName("dropdown_content")[0];
    if(event.target == gett || event.target == document.getElementById("input")) {
		
		content.style.display="block";
		
	}
	else {
		content.style.display="none";
	}
}