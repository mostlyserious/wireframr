/* Author:

*/
$(document).ready(function() {

	$('a').click(function() {
		var to = $(this).attr('href');
		$('html,body').animate({scrollTop: $(to).offset().top - 50},'slow');
		history.pushState({foo: 'bar'}, window.document.title, to);
		return false;
	});

	$('form').submit(function() {
		return false;
	})
});






