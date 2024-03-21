const ERRORS = [
  'Your country is currently not supported, come back soon!',
  "Country can't be found by isoCode",
  'Your region is currently not supported, come back soon!',
];

/**
 * @param {string} errorMessage
 * @return {boolean}
 */
export const isRegionalTxCreationError = (errorMessage = '') => {
  return typeof errorMessage === 'string' ? ERRORS.includes(errorMessage) : false;
};
