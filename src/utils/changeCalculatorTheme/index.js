import { partnersTheme, selectors } from './info';

export const getStyleVariable = (selector) =>
  window.getComputedStyle(document.documentElement).getPropertyValue(selector);

export const changeCalculatorTheme = (partner) => {
  Object.keys(partnersTheme[partner]).forEach((variable) => {
    if (variable !== 'logos') {
      document.documentElement.style.setProperty(selectors[variable], partnersTheme[partner][variable]);
    }
  });
};

export const changeColors = (theme, background = 'black') => {
  if (background === 'black') {
    if (Object.keys(partnersTheme).includes(theme)) {
      changeCalculatorTheme(theme);

      return;
    }
  }

  if (background === 'white') {
    if (Object.keys(partnersTheme).includes(`${theme}BackgroundWhite`)) {
      changeCalculatorTheme(`${theme}BackgroundWhite`);

      return;
    }
    changeCalculatorTheme(theme, 'black');

    return;
  }

  changeCalculatorTheme('guardarian');
};
