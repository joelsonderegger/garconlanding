/*jslint regexp: true*/
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
	 * Convert new line (\n\r) to <br>
	 * from http://phpjs.org/functions/nl2br:480
	 */
	var result = function(text) {
		text = Handlebars.Utils.escapeExpression(text);
		
		var nl2br = (String(text)).replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + '<br>' + '$2');
		
		return new Handlebars.SafeString(nl2br);
	};

	Handlebars.registerHelper('nl2br', result);

	return result;
}));