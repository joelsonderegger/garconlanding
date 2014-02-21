/*global Handlebars, i18n */
(function (factory) {
	'use strict';
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = factory(require('handlebars'),require('i18next'));
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
	//  usage: {{i18n_t "Hello"}}
	//	pass local i18next into helper in nodejs
	//		{{i18n_t "Hello" i18next=i18nextObj}}
	var result = function(context, block) {
		var rs;
		if(block.hash.i18next){
			i18n = block.hash.i18next;
		}
		if(context){
			rs = i18n.t(String(context));
		}else{
			rs = '[no key specified]';
		}
		return new Handlebars.SafeString(rs);
	};
	Handlebars.registerHelper('i18n_t', result);

	return result;
	
}));