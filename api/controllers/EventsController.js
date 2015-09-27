/**
 * EventsController
 *
 * @description :: Server-side logic for managing events
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res) {
		Event.create({
			name: req.param('name'),
			organization: req.param('organization'),
			copmensation: req.param('compensation'),
			description: req.param('description')
		}).exec(
			function(err, user) {
				if (err) {
					console.log(err);
					return res.send(err, 500);
				}
				return res.redirect('/')
			}
		)
	}
};

