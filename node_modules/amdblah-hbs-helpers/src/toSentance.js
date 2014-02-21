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
	//  return a comma-serperated list from an iterable object
	// usage: {{#toSentance tags}}{{name}}{{/toSentance}}
	var result = function(context, block) {
		var i, j, ret = '';
		for (i = 0, j = context.length; i < j; i+=1) {
			ret = ret + block(context[i]);
			if (i < j - 1) {
				ret = ret + ', ';
			}
		}
		return ret;
	};

	Handlebars.registerHelper('toSentance', result);

	return result;
}));