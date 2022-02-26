function insertionSort(array) {

  let i, elt, j;

  for (i = 0; i < array.length; i++) {
    if (!(typeof array[i] === 'string' || array[i] instanceof String)) {
      throw "array must contain only strings";
    }
  }


  for (i = 1; i < array.length; i++) {
    elt = array[i];

    j = i - 1;
    while (j >= 0 && elt.length < array[j].length) {
      array[j + 1] = array[j];
      j = j - 1;
    }

    array[j + 1] = elt;
  }
  return array;
}

module.exports = insertionSort;