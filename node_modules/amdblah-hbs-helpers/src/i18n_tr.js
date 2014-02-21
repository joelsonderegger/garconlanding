/*global Handlebars, i18n */
(function (factory) {
	'use strict';
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = factory(require('handlebars'));
    } else {
		if (typeof define === 'function' && define.amd) {
			// AMD. Register as named module.
			define(['hbs/handlebars', 'i18next'], factory);
		} else {
			// Browser globals.
			factory(Handlebars,i18n);
		}
	}
}(function (Handlebars,i18n) {
	'use strict';
	
	//  usage: {{#i18n_tr "Hello"}}{{/i18n_tr}}
	//	pass local i18next into helper in nodejs
	//		{{#i18n_tr "Hello" i18next=i18nextObj}}{{/i18n_tr}}
	var result = function(context, block) {
		
		if(block.hash.i18next){
			i18n = block.hash.i18next;
		}
		
		var rs, opts = i18n.functions.extend(block.hash, context);
		
		if (block.fn) {
			opts.defaultValue = block.fn(context);
		}
		
		if(context){
			rs = i18n.t(String(context),opts);
		}else{
			rs = '[no key specified]';
		}

		return new Handlebars.SafeString(rs);
	};

	Handlebars.registerHelper('i18n_tr', result);

	return result;
	
}));