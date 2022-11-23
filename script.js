$(document).ready(function(){
	$('#btn').click(function() {
		$('#msg').toggle();
	});

	$('#msg').click(function(){
		$(this).toggle();
	});
});