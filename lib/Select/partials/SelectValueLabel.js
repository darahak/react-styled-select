(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'styled-components', '../cssHelpers'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('styled-components'), require('../cssHelpers'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.styledComponents, global.cssHelpers);
    global.SelectValueLabel = mod.exports;
  }
})(this, function (exports, _styledComponents, _cssHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _styledComponents2 = _interopRequireDefault(_styledComponents);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _templateObject = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  display: inline-block;\n  ', '\n  ', '\n\n  ', '\n'], ['\n  box-sizing: border-box;\n  display: inline-block;\n  ', '\n  ', '\n\n  ', '\n']);

  function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }

  var globalCss = (0, _cssHelpers.autoCssGenerator)('select');
  var g = (0, _cssHelpers.autoCssGenerator)('select-value-label');

  exports.default = _styledComponents2.default.div(_templateObject, globalCss('color'), g('font-family'), function (props) {
    return props.multi && g('padding');
  });
});
//# sourceMappingURL=SelectValueLabel.js.map