/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
    create: function(req, res) {
        User.create({
            name: req.param('name'),
            email: req.param('email'),
            account: req.param('account'),
            password: req.param('password')
        }).exec(
            function(err, user) {
                if (err) {
                    console.log(err);
                    return res.send(err, 500);
                }
                return res.redirect('/');
            }
        );
    },
};

