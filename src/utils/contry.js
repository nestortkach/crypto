function getCountryFromBrowserLanguage() {
  if (!navigator || !navigator.language) {
    return undefined;
  }

  if (navigator.language.indexOf('-') >= 1) {
    const lang = navigator.language.split('-')[1].toLowerCase();

    return lang;
  }

  return navigator.language.toLowerCase();
}

export { getCountryFromBrowserLanguage };
