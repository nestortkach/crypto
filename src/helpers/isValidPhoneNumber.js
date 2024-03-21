import { parsePhoneNumber } from 'libphonenumber-js/min';
import isObject from 'lodash/isObject';

/**
 * Phone number validation
 *
 * @param {string} number
 * @return {boolean}
 */
export const isValidPhoneNumber = (number) => {
  let parsedNumber = null;

  if (typeof number !== 'string') {
    return false;
  }

  try {
    parsedNumber = parsePhoneNumber(`+${number.replace('+', '')}`);
    return isObject(parsedNumber) && 'isValid' in parsedNumber && parsedNumber.isValid();
  } catch (_) {
    return false;
  }
};
