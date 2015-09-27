$.post('/getCurrentUser',
    function (data) {
        $.post('/user/find',
            {id: data.user},
            function (user) {
                $('#head').append(user.name);
            }
            );        
    }
    );
$(function() {
	$("#submit").on('click', function(e) {
        e.preventDefault();
        var $form = $('#form')
        $.post("/events/create",
         $form.serialize(), 
         function(msg) {}
         );
    })
    $("body").on('click', 'button', function() {
        if (this.id != "submit") {
            console.log(this.id)
            $.post('/events/find', {id: this.id},
                function (events) {
                    $('#date').text(events.date)
                    $('#compensation').text(events.compensation)
                    $('#volunteers').text(events.volunteers)
                    $('#description').text(events.description)
                })
        }
    })
})
io.socket.post('/events/join', function(data, jwres) {
    $('#list-group').html("");
	$.post('/events/findAll',
		function(data) {
			for (var i = 0; i < data.length; i++) {
				$("#list-group").append('<button type="button" id='+data[i].id+' class="list-group-item">'+data[i].name+'</button>');
			}
		})
})


io.socket.on('update',
    function(msg){
        $('#list-group').html("");
        $.post('/events/findAll',
            function(data){
                for ( var i = 0; i < data.length; i++ ){
                    $("#list-group").append('<button type="button" id='+data[i].id+' class="list-group-item">'+data[i].name+'</button>');
                }
            }
            );
    }
    );
