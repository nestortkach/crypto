const axios = require('axios');
const sharp = require('sharp');
const fs = require('fs');

const createFolderIfNotExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

const getImage = async (imageUrl) => {
  try {
    const response = await axios.get(imageUrl, {
      responseType: 'arraybuffer',
      timeout: 10000,
      timeoutErrorMessage: `Timeout to fetch image ${imageUrl}`,
    });
    return response.data;
  } catch (error) {
    console.error();
    return null;
  }
};

const saveImageInPNG = async (imageBuffer, folderDir, fileName, dimension = 64) => {
  await sharp(imageBuffer).resize(dimension, dimension).png().toFile(`${folderDir}/${fileName}-${dimension}.png`);
};

const saveImageInSVG = async (imageBuffer, folderDir, fileName) => {
  fs.writeFileSync(`${folderDir}/${fileName}.svg`, imageBuffer);
};

const chunkArray = (arr, chunkSize = 50) => {
  const arrayLength = arr.length;
  const tempArray = [];

  for (let index = 0; index < arrayLength; index += chunkSize) {
    const myChunk = arr.slice(index, index + chunkSize);
    // Do something if you want with the group
    tempArray.push(myChunk);
  }

  return tempArray;
};

module.exports = {
  createFolderIfNotExists,
  chunkArray,
  getImage,
  saveImageInPNG,
  saveImageInSVG,
};
