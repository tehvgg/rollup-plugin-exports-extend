'use strict';

function exportsExtend(renamedObject) {
  var exportRegex = /}\({}(.*)\)\);$/;
  var exportReplace = '}(' + renamedObject + '$1));';
  return {
    name: 'exports-extend',
    transformBundle: function transformBundle(source, _ref) {
      var format = _ref.format;

      if (format !== 'iife') {
        throw new Error('This plugin only works for IIFE bundles. Format given: ' + format);
      }
      return source.replace(exportRegex, exportReplace);
    }
  };
}

module.exports = exportsExtend;
