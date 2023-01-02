let subMenu = document.getElementById(subMenu);

		function toggleMenu(){
			subMenu.classList.toggle('open-menu')
		}

$(".animated-progress span").each(function () {
	$(this).animate(
		{
			width: $(this).attr("data-progress") + "%",
		},
		1000
	);
	$(this).text($(this).attr("data-progress") + "%");
});