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
	var result = function(items, block) {
		var i, delimiter = block.hash.delimiter || ',', start = block.hash.start || 0, len = items ? items.length : 0, end = block.hash.end || len, out = '';

		if (end > len) {
			end = len;
		}

		if ('function' === typeof block) {
			for ( i = start; i < end; i+=1) {
				if (i > start){
					out += delimiter;
				}
				if ('string' === typeof items[i]){
					out += items[i];
				}
				
				out += block(items[i]);
			}
			return out;
		}
		return [].concat(items).slice(start, end).join(delimiter);
		
	};

	Handlebars.registerHelper('join', result);

	return result;
}));