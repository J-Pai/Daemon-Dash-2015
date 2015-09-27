/**
* Events.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name: {
  		type: 'string',
  		required: true
  	},
  	organization: {
  		type:'string',
//  		required: true
  	},
  	compensation: {
  		type: 'integer',
//  		required: true
  	},
  	description: {
  		type: 'text',

  	},
  	volunteers: {
  		type: 'array',
  	}
  }
};

