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
            password: req.param('password'),
            account_id: null
        }).exec(
            function(err, user) {
                if (err) {
                    return res.send(err, 500);
                }
                return res.redirect('/');
            }
        );
    },
    clear: function(req, res) {
        User.count({}).exec(
            function(err, data) {
                if(err) {
                    return res.send(err, 500);
                }
                User.find().exec(
                    function(err, users){
                        for(var i = 0; i < data; i++){
                            User.destroy(users[i]).exec(
                                function(err){
                                    console.log('User deleted');
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

