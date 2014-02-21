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
	// wrap original context into new context object
	// usage: {{#wrap context name="contextFieldName" , f1=../obj1 f2=../obj2"}}
	//				{{> context_template}}
	//        {{/wrap}}
	//
	// new context object: 
	//    { 
	//		contextFileName : originalContext ,
	//      f1 : obj1,
	//      f2 : obj2
	//	  }
	var result = function(context, block) {
		var key, newContext = {};
		newContext[block.hash.name] = context;
		for(key in block.hash) {
			if (block.hash.hasOwnProperty(key) && key !== 'name') {
				newContext[key] = block.hash[key];
			}
		}
		return block.fn(newContext);
	};

	Handlebars.registerHelper('wrap', result);

	return result;
}));