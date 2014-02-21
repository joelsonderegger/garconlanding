//>>excludeStart('excludeAfterBuild', pragmas.excludeAfterBuild)
/*
I have no idea why this dependency can't be met without this, but for now it works.
Keep it updated with all of your helpers.
It will get completely removed in the build.
I think it has to do with circular dependencies, but I don't know how to fix it.

Sucks. I know.
*/
(function (factory) {
	'use strict';
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = require('require-all')(__dirname);
		//module.exports = factory();
    } else {
		if (typeof define === 'function' && define.amd) {
			// AMD. Register as anonymous module.
			define(['./dateFormat',
				  './debug',
				  './first',
				  './head',
				  './if_eq',
				  './if_gt',
				  './if_gteq',
				  './if_lt',
				  './if_lteq',
				  './include',
				  './join',
				  './nl2br',
				  './slice',
				  './tail',
				  './toSentance',
				  './uc',
				  './unless_eq',
				  './unless_gt',
				  './unless_gteq',
				  './unless_lt',
				  './unless_lteq',
				  './inject',
				  './wrap',
				  './i18n_t',
				  './i18n_tr'], factory);
		} else {
			// Browser globals.
			factory();
		}
	}
}(function () {
	'use strict';
	return {};
}));
//>>excludeEnd('excludeAfterBuild')