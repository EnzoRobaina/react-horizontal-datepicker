"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hexToRgb;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.parse-int.js");

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? "rgb(" + parseInt(result[1], 16) + ',' + parseInt(result[2], 16) + ',' + parseInt(result[3], 16) + ")" : null;
}