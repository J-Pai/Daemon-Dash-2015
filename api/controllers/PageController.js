/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    personal: function(req, res) {
        return res.view('personal');
    },
    organization: function(req, res) {
        return res.view('organization');
    }
};

