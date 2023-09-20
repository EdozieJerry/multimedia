$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});

// get the molda 
		// var molda = document.getElementById('id01');

		// when the user click anywhere outside of the molda, close it
		// window.onclick = function(event){
		// 	if (event.target == modal) {
		// 		modal.style.display = "none";
		// 	}
		// }