$(function() {
	$("#submit").on('click', function() {
		var $form = $('#form')
		console.log($form.serialize())
		$.post("/events/create",
			$form.serialize(), function(msg) {});
	})


})