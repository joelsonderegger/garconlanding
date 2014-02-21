/*global console, Handlebars */
(function (factory) {
	'use strict';
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = factory(require('handlebars'));
    } else {
		if (typeof define === 'function' && define.amd) {
			// AMD. Register as named module.
			define(['hbs/handlebars'], factory);
		} else {
			// Browser globals.
			factory(Handlebars);
		}
	}
}(function (Handlebars,moment) {
	'use strict';
	// debug helper
	// usage: {{debug}} or {{debug someValue}}
	// from: @commondream (http://thinkvitamin.com/code/handlebars-js-part-3-tips-and-tricks/)
	var result = function(optionalValue) {
		console.log('\nCurrent Context');
		console.log('====================');
		console.log(this);

		if (arguments.length > 1) {
			console.log('Value');
			console.log('====================');
			console.log(optionalValue);
		}
	};

	Handlebars.registerHelper('debug', result);

	return result;
}));