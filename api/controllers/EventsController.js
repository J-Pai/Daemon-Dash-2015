/**
 * EventsController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res) {
		sails.sockets.broadcast('EventsUpdates', 'update', {msg: 'Events Create Function Called'});
        Events.create({
			name: req.param('name'),
			organization: req.param('organization'),
			compensation: req.param('compensation'),
			description: req.param('description'),
			date: req.param('date'),
			volunteers: []
		}).exec(
			function(err, e) {
				if (err) {
					return res.send(err, 500);
				}
				return res.send(e);
			}
		)
	},
    findAll: function(req, res) {
        Events.find().exec(function(err, e) {
            res.send(e);
        });
    },
    join: function(req, res) {
        if (req.isSocket){
            sails.sockets.join(req.socket, 'EventsUpdates');
            res.send('Subscribed to Events room');
        }
    },
    clear: function(req, res) {
        Events.count({}).exec(
            function(err, data) {
                if(err) {
                    return res.send(err, 500);
                }
                Events.find().exec(
                    function(err, events){
                        for(var i = 0; i < data; i++){
                            Events.destroy(events[i]).exec(
                                function(err){
                                    console.log('Event deleted');
                                }
                            );
                        }
                        return res.send({message: "FINISHED"});
                    }
                );
            }
        );
    }
};

