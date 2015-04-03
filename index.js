module.exports = function(i18n) {

  i18n.__l = function(key) {
    var translations = [];
    Object.keys(i18n.getCatalog()).forEach(function(locale) {
      translations.push( i18n.__({phrase: key, locale: locale}) );
    });
    return translations;
  }

  return i18n;
};
