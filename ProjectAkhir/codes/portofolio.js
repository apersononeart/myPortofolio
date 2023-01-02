let navBar = document.getElementById("navbar");
let flow = document.getElementById("flow");

navBar.addEventListener('click',() => flow.classList.toggle("fin"));

document.querySelectorAll('.myItem img').forEach(image => {
 	image.onclick = () => {
 		document.querySelector('.popup-image').style.display = 'block';
 		document.querySelector('.popup-image img').src = image.getAttribute('src');
 	}
})

document.querySelector('.popup-image span').onclick = () =>{
 	document.querySelector('.popup-image').style.display = 'none';
}