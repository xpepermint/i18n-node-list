# [i18n-node](https://github.com/mashpie/i18n-node)-list

> Small i18n-node extension adding function `__l` which returns a list of known translations for a key

## Example

Why would I use this? The new `__l` function return an array of translations for a specified key and is especially useful when translating [express](http://expressjs.com) routes.


```js
var express = require('express');
var i18n = require("i18n"),
    i18n = require('i18-list')(i18n);
var app = express();

app.get( i18n.__l('/:locale/products'), function (req, res) {
  req.setLocale( req.params.locale );
  res.render('index');
  // make sure that you add translation for `/:locale/products` for all locales
});

module.exports = app;

```

See the [i18n-node](https://github.com/mashpie/i18n-node) package for more information.
