export const deleteSymbols = (value) => value.replace(/ /g, '').replace(/\(/g, '').replace(/\)/g, '').replace(/-/g, '');
