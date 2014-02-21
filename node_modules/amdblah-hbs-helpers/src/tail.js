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
	var _isFunction = function(obj) {
		return !!(obj && obj.constructor && obj.call && obj.apply);
	}, result = function(arr, fn) {
		if (_isFunction(fn)) {
			// block helper
			var i,len, out = '';
			for (i = 1, len = arr.length; i < len; i+=1) {
				out += fn(arr[i]);
			}
			return out;
		}
		return arr.slice(1);
		
	};

	Handlebars.registerHelper('tail', result);

	return result;
}));