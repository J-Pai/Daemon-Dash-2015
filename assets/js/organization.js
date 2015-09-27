$(function() {
	$("#submit").on('click', function(e) {
        e.preventDefault();
		var $form = $('#form')
		console.log($form.serialize())
		$.post("/events/create",
			$form.serialize(), 
            function(msg) {}
        );
	})


})
