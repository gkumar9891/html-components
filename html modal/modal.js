function hello() {
	var a = document.getElementsByClassName("modal_form")[0];
	a.style.display="block";
}

function closed() {
	var a = document.getElementsByClassName("modal_form")[0];
	a.style.display="none";
}

    var modal = document.getElementsByClassName("modal_form")[0];

window.onclick = function(event) {
    console.log(event.target);
	if(event.target == modal) {
		modal.style.display="none";
	}
}
