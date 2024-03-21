export function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
}

export function getBase64Info(base64) {
  const [typePart, encodedString] = base64.split(';');
  return {
    type: typePart.split(':')[1],
    base64string: encodedString.replace('base64,', ''),
  };
}
