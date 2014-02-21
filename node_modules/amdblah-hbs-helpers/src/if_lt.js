/*global Handlebars */
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
}(function (Handlebars) {
	'use strict';
	/**
	 * If Less Than
	 * if_lt this compare=that
	 */
	var result = function(context, options) {
		if (context < options.hash.compare) {
			return options.fn(this);
		}
		return options.inverse(this);
	};

	Handlebars.registerHelper('if_lt', result);

	return result;
}));