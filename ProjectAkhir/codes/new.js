let navBar = document.getElementById("navbar");
let flow = document.getElementById("flow");

navBar.addEventListener('click',() => flow.classList.toggle("fin"));

// document.querySelectorAll('.myItem img').forEach(image => {
// 	image.onclick = () => {
// 		document.querySelector('.popup-image').style.display = 'block';
// 		document.querySelector('.popup-image img').src = image.getAttribute('src');
// 	}
// });

// document.querySelector('.popup-image span').onclick = () =>{
// 	document.querySelector('.popup-image').style.display = 'none';
// }

document.querySelectorAll('.myItem img').forEach(image => {
	image.onclick = () => {
		document.querySelector('.popup-image').style.display = 'block';
		document.querySelector('.popup-image img').src = image.getAttribute('src');
	}
});

document.querySelector('.popup-image span').onclick = () =>{
	document.querySelector('.popup-image').style.display = 'none';
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("popup-image");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
