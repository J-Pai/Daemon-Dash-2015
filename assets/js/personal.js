$.post('/getCurrentUser',
    function (data) {
        $.post('/user/find',
            {id: data.user},
            function (user) {
                console.log(user.name);
                $('#head').append(user.name);
            }
        );        
    }
);

var eventList = $('#event-list');

io.socket.post('/events/join',
    function (data, jwres) {
        eventList.html("");
        $.post('/events/findAll',
            function(data){
                for ( var i = 0; i < data.length; i++ ){
                    eventList.append('<li>' + data[i].name + '</li>');
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
                    eventList.append('<li>' + data[i].name + '</li>');
                }
            }
        );
    }
);


