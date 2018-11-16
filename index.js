var postcss = require('postcss');

// !singlequotes|!doublequotes|!url()|pixelunit
var pxRegex = /"[^"]+"|'[^']+'|url\([^\)]+\)|(\d*\.?\d+)px/g;

var Default = {
  vwUnit: 1920
}

module.exports = postcss.plugin('pxvwpc', function (options) {
  return function (css) {
    options = options || {};
    var opts = Object.assign({}, Default, options);
    var content = css.source.input.css
    if (content.indexOf('/*to-vw*/') != -1) {
      css.walkRules(function (rule) {
        rule.walkDecls(function(decl) {
          const annotation = decl.next();
          if ( annotation && annotation.type == 'comment' && annotation.text == 'px') return;
          if (decl.value.indexOf('px') != -1) {
            decl.value = decl.value.replace(pxRegex, function (pxSize) {
              var num = parseInt(pxSize);
              var vwNum = num * 100 / opts.vwUnit;
              console.log(vwNum, 'vwnum')
              return vwNum + 'vw';
            });
          }
        })
      });
    }
  }
});
