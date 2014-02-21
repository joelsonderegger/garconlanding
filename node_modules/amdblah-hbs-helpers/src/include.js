/*global Handlebars, exports */
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
	var result = function(name) {
		if (!exports.templates[name]) {
			throw new Error('Template Not Found: ' + name);
		}
		return exports.templates[name](this, {});
	};

	Handlebars.registerHelper('include', result);

	return result;
}));
