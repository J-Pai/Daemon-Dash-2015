$(function() {
	$("#submit").on('click', function(e) {
        e.preventDefault();
		var $form = $('#form')
		$.post("/event/create",
			$form.serialize(), 
            function(msg) {}
        );
	})


})
