$(function() {
	$("#submit").on('click', function() {
		var $form = $('#form')
		$.post("/event/create",
			$form.serialize(), function(msg) {});
	})


})