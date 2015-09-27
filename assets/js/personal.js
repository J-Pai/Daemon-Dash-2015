$(function() {
    var id;
    var sessionName;
    $.post('/getCurrentUser',
        function (data) {
            $.post('/user/find',
                {id: data.user},
                function (user) {
                    sessionName = user.name; 
                    $('#head').append(user.name);
                }
                );        
        }
        );

    $("body").on('click','button',function() {
        if (this.id != "submit") {
            id = this.id;
            $.post('/events/find',
                {id: this.id},
                function (events) {
                    $('#organization').text(events.organization)
                    $('#date').text(events.date)
                    $('#compensation').text(events.compensation)
                    $('#description').text(events.description)
                }

                );
        }
    });
    $("#submit").on('click', function() {
        if (id != undefined) {
            $.post('/events/addPerson',
                {id: id,
                 name: sessionName},
                function (events) {
                    console.log(events[0]);
                })
        }
    })
    io.socket.post('/events/join',
        function (data, jwres) {
            $('#list-group').html('<h1 class="list-group-item-heading">Volunteer Requests</h1>');
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
            $('#list-group').html('<h1 class="list-group-item-heading">Volunteer Requests</h1>');
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


