var slides = document.getElementsByClassName("carousel_item");
var dots = document.getElementsByClassName("dot");
var slideIndex = 0;

show();

function plusSlide(n) {
	slideIndex = slideIndex + n;
	show();
}

function currentSlide(n) {
	slideIndex = n;
	show();
}

function show() {
	var i; 
    for(i=0; i < slides.length; i++) {
		slides[i].style.display="none";
	    dots[i].style.background="#bbb"; 
	}

	
	if(slideIndex >= slides.length) {slideIndex = 0}
	if(slideIndex < 0) {slideIndex = slides.length - 1;}
	
	slides[slideIndex].style.display="block";
	dots[slideIndex].style.background="black";

    setTimeout(shows, 2000); 
}

function shows() {
	slideIndex = slideIndex + 1
	var i; 
    for(i=0; i < slides.length; i++) {
		slides[i].style.display="none";
	    dots[i].style.background="#bbb"; 
	}

	
	if(slideIndex >= slides.length) {slideIndex = 0}
	if(slideIndex < 0) {slideIndex = slides.length - 1;}
	slides[slideIndex].style.display="block";
	dots[slideIndex].style.background="black";
}