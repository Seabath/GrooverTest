const insertionSort = require("./sort")

describe('Test sort function', function () {

  it('should sort empty array', () => {

    let input = []
    let expected = []

    expect(insertionSort(input)).toStrictEqual(expected)
  })

  it('should sort ordered array', () => {

    let input = ["1", "22", "333"]
    let expected =["1", "22", "333"]

    expect(insertionSort(input)).toStrictEqual(expected)
  })

  it('should sort unordered array', () => {

    let input = ["333", "1", "22"]
    let expected = ["1", "22", "333"]

    expect(insertionSort(input)).toStrictEqual(expected)
  })

  it('should sort random array', () => {

    let input = ["333", "1", 42, ["chaussettes"], "22"]
    let expected = []

    try {
      insertionSort(input)
      expect("true").toBe("Type error is not thrown in case of wrong array content");
    } catch (e) {
      expect(e).toBe("array must contain only strings");
    }
  })

});