/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    session: function(req, res) {
        res.view('organization');
    },
    personal: function(req, res) {
        return res.view('session');
    },
    organization: function(req, res) {
        return res.view('organization');
    }
};

