const axios = require('axios');
const { createFolderIfNotExists, chunkArray, getImage, saveImageInPNG, saveImageInSVG } = require('./utils');

const currencyListEndpoint = 'https://api.changenow.io/v2/exchange/currencies';
const folderDir = './public/currencies';

const getAllCurrencies = async () => {
  const response = await axios.get(currencyListEndpoint);
  return response.data;
};

const uploadAndSaveImage = async (currency) => {
  const buffer = await getImage(currency.image);
  if (buffer) {
    const fileName = `${currency.ticker}-${currency.network}`;
    await saveImageInPNG(buffer, folderDir, fileName);
    await saveImageInSVG(buffer, folderDir, fileName);
  }
};

const saveIcons = async () => {
  try {
    const allCurrencies = await getAllCurrencies();
    createFolderIfNotExists(folderDir);
    for (const chuckedPart of chunkArray(allCurrencies)) {
      await Promise.all(chuckedPart.map(uploadAndSaveImage));
    }
  } catch (error) {
    console.error(error);
  } finally {
    console.log('saveIcons done');
  }
};

/**
 * Run inside project folder: node currency-scrapper/currency-scrapper.js
 */

(async () => {
  await saveIcons();
})();
