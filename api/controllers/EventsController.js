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
                    console.log(err)
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
    addPerson: function (req, res) {
        Events.find({id: req.param('id')}).exec(
            function(err, eventData) {
                var name = req.param('name');
                eventData[0].volunteers.push(name);
                Events.update({id: req.param('id')}, {volunteers: eventData[0].volunteers}).exec(
                    function(err, update){
                        if(err) return res.send(err);
                        return res.send(update);
                    }
                );
            }
        );        
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
                            Events.destroy({id: events[i].id}).exec(
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

