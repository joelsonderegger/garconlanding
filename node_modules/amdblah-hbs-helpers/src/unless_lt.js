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
	 * Unless Less Than
	 * unless_lt this compare=that
	 */
	var result = function(context, options) {
		if (context < options.hash.compare){
			return options.inverse(this);
		}
		return options.fn(this);
	};

	Handlebars.registerHelper('unless_lt', result);

	return result;

}));