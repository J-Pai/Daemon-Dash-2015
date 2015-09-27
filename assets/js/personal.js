$(function() {
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

$("body").on('click','button',function(e) {
    $.post('/events/find',
        {id: this.id},
        function (events) {
            $('#organization').text(events.organization)
            $('#date').text(events.date)
            $('#compensation').text(events.compensation)
            $('#description').text(events.description)
        }

    );

});

io.socket.post('/events/join',
    function (data, jwres) {
        $.post('/events/findAll',
            function(data){
                for ( var i = 0; i < data.length; i++ ){
                    $('#list-group').append('<button type="button" id='+data[i].id+' class="list-group-item">'+data[i].name+'</button>');
                }
            }
        );
    }
);

io.socket.on('update',
    function(msg){
        eventList.html("");
        $.post('/events/findAll',
            function(data){
                for ( var i = 0; i < data.length; i++ ){
                    $('#list-group').append('<button type="button" id='+data[i].id+' class="list-group-item">'+data[i].name+'</button>');
                }
            }
        );
    }
);
});


