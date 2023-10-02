var active = document.getElementsByClassName("sidenav_active")[0];
var sidenavLeft = document.getElementsByClassName("sidenav_left")[0];
active.addEventListener("click", function(){
	sidenavLeft.style.width="30%";

    document.addEventListener("click", function(event) {
		console.log(event);
	if(event.target.closest('.sidenav')){
      return;
	}
	else {
	   sidenavLeft.style.width="0";
	}
});

});

function closed(){
	sidenavLeft.style.width="0";
}
