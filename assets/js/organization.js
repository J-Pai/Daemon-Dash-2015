$(function() {
	$("#submit").on('click', function(e) {
        e.preventDefault();
		var $form = $('#form')
		$.post("/events/create",
			$form.serialize(), 
            function(msg) {}
        );
	})
})
io.socket.post('/events/join', function(data, jwres) {
	$.post('/events/findAll',
		function(data) {
			$("#list-group").html('<h4 class="list-group-item-heading">Events</h4>')
			for (var i = 0; i < data.length; i++) {
				$("#list-group").append('<button type="button" class="list-group-item">'+data[i].name+'</button>');
			}
		})
})


io.socket.on('update',
    function(msg){
        $.post('/events/findAll',
            function(data){
				$("#list-group").html('<h4 class="list-group-item-heading">Events</h4>')
                for ( var i = 0; i < data.length; i++ ){
                    $("#list-group").append('<button type="button" class="list-group-item">'+data[i].name+'</button>');
                }
            }
        );
    }
);
