export const generateUniqueNumbersArray = (length = 100) => {
  let arr = [];

  while (arr.length < length) {
    const random = Math.floor(Math.random() * 100) + 1;
    if (arr.indexOf(random) === -1) {
      arr = [...arr, random];
    }
  }

  return arr;
};
