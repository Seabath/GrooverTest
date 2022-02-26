def insertSort(array):

  for i in array:
    if not isinstance(i, str):
      raise TypeError("array must contain only strings")

  for i in range(1, len(array)):
    elt = array[i]
    j = i - 1
    while j >= 0 and len(elt) < len(array[j]) :
      array[j + 1] = array[j]
      j -= 1
    array[j + 1] = elt

  return array