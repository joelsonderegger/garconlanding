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
	//  return the first item of a list only
	// usage: {{#first items}}{{name}}{{/first}}
	var _isFunction = function(obj) {
		return !!(obj && obj.constructor && obj.call && obj.apply);
	}, result = function(arr, fn) {
		if (_isFunction(fn)) {
			// block helper
			return fn(arr[0]);
		}
		return arr[0];
		
	};

	Handlebars.registerHelper('head', result);

	return result;
}));