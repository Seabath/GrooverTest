import sort

def test_sort_empty_array():
  input = []
  expected = []
  assert sort.insertSort(input) == expected

def test_sort_ordered_array():
  input = ["1", "22", "333"]
  expected = ["1", "22", "333"]
  assert sort.insertSort(input) == expected

def test_sort_unordered_array():
  input = ["333", "1", "22"]
  expected = ["1", "22", "333"]
  assert sort.insertSort(input) == expected

def test_sort_random_array():
  input = ["333", "1", 42, ["chaussettes"], "22"]
  try:
    sort.insertSort(input)
    assert False == "Type error is not thrown in case of wrong array content"
  except TypeError as e:
    assert str(e) == "array must contain only strings"