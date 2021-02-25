'use strict';

const controllers = require('./controller');

module.exports = function(app){
	app.route('/about').get(controllers.about);
	app.route('/distance/:zipcode1/').get(controllers.getDistance);
};