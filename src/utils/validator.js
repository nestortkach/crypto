export const dataErrorHandler = (val = '', rules = {}) => {
  if (rules.required && !val) {
    return 'This is a required field';
  }
  return null;
};
