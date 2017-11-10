export default function exportsExtend (renamedObject) {
  const exportRegex = /}\({}(.*)\)\);$/
  const exportReplace = `}(${renamedObject}$1));`;
  return {
    name: 'exports-extend',
    transformBundle (source, { format }) {
      if (format !== 'iife') {
        throw new Error(`This plugin only works for IIFE bundles. Format given: ${format}`);
      }
      return source.replace(exportRegex, exportReplace);
    }
  };
}
