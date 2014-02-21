# Amdblah Handlebars helpers

A small collection of Handlebars helpers run in both the server(nodejs) and client(browser).


#Installation

##Node.js

Install using npm:

```shell
$ npm install amdblah-hbs-helpers --save
```

Register all helpers with the following line of code:

```javascript
require('amdblah-hbs-helpers');
```

##RequireJS in browser

Install using bower:

```shell
$ bower install amdblah-hbs-helpers --save
```

Configure RequireJS with [SlexAxton/require-handlebars-plugin](https://github.com/SlexAxton/require-handlebars-plugin)

```javascript
require.config({
	...
	paths : {
		...
		'hbs.helpers' : 'path_to_bower_components/amdblah-hbs-helpers/dist'
		...
	}
	'hbs' : {
		…		
		helpers : true,
		helperDirectory : 'hbs.helpers/'
	}
	...
}
```


#Usage

Please refer to projects below:

[danharper/Handlebars-Helpers](https://github.com/danharper/Handlebars-Helpers)

[raDiesle/Handlebars.js-helpers-collection](https://github.com/raDiesle/Handlebars.js-helpers-collection)

##Helper changes

###i18next

i18next translation helper

####i18n_t

```
{{i18n_t "your_key"}}
```

Pass local i18next into helper in nodejs

```
{{i18n_t "your_key" i18next=i18nextObj}}
```


####i18n_tr

```
{{#i18n_tr "your_key" add="from helper" }}
h6 Some Text
p some paragraph with variable __add__ __addFromContext__
{/i18n_tr}
```

Pass local i18next into helper in nodejs

```
{{#i18n_tr "your_key" add="from helper" i18next=i18nextObj}}
h6 Some Text
p some paragraph with variable __add__ __addFromContext__
{/i18n_tr}
```



###Moment.js

Format a datetime in milliseconds using [Moment.js](http://momentjs.com/)


####dateFormat

Display formatted datetime:

```
{{dateFormat datetime format="MMMM YYYY"}
```
Display time from now 

```
{{dateFormat datetime fromNow=true}}
```

Pass local moment into helper in nodejs

```
{{dateFormat datetime format="MMMM YYYY" moment=momentObj}
{{dateFormat datetime fromNow=true moment=momentObj}}
```
Refer to the moment middleware in express.js.


# License

Most of the code in this is from [danharper/Handlebars-Helpers](https://github.com/danharper/Handlebars-Helpers) , [raDiesle/Handlebars.js-helpers-collection](https://github.com/raDiesle/Handlebars.js-helpers-collection), [i18next](https://github.com/jamuhl/i18next) and [moment](https://github.com/moment/moment) . Those projects are under their own license. Any other code added by me is released under the WTFPL license. No warranty is provided.
