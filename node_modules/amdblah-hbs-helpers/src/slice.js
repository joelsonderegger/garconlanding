/*jslint todo: true */
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
	// a iterate over a specific portion of a list.
	// usage: {{#slice items offset="1" limit="5"}}{{name}}{{/slice}} : items 1 thru 6
	// usage: {{#slice items limit="10"}}{{name}}{{/slice}} : items 0 thru 9
	// usage: {{#slice items offset="3"}}{{name}}{{/slice}} : items 3 thru context.length
	// defaults are offset=0, limit=5
	// todo: combine parameters into single string like python or ruby slice ("start:length" or "start,length")
	var result = function(context, block) {
		var ret = '', offset = parseInt(block.hash.offset,10) || 0, limit = parseInt(block.hash.limit,10) || 5, i = (offset < context.length) ? offset : 0, j = ((limit + offset) < context.length) ? (limit + offset) : context.length;

		for (i, j; i < j; i+=1) {
			ret += block(context[i]);
		}

		return ret;
	};

	Handlebars.registerHelper('slice', result);

	return result;
}));