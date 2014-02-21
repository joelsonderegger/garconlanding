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
	//  inject field to context object
	//  usage: 
	//		{{#items}}
	//			{{inject context f1=../obj1 f2=../obj2"}}
	//			{{> item_template }}
	//		{{/items}}
	//
	// new context structure : 
	//    { 
	//		... original fields ...
	//      f1 : obj1,
	//      f2 : obj2
	//	  }
	var result = function(context, block) {
		var key;
		for(key in block.hash) {
			if (block.hash.hasOwnProperty(key)) {
				context[key] = block.hash[key];
			}
		}
	};

	Handlebars.registerHelper('inject', result);

	return result;
}));