function NumberOfMostUsefullSymbol (string) {
  const myMap = new Map()
  for (let i = 0; i < string.length; i++) {
    if (myMap.has(string[i]) === false)
      myMap.set(string[i], 1)
    else
    {
      let newNumber = myMap.get(string[i]);
      myMap.set(string[i], ++newNumber)
    }


  }
  console.log(myMap)

  console.log([...myMap.entries()].reduce((a, e ) => e[1] > a[1] ? e : a))

}

module.exports.NumberOfMostUsefullSymbol = NumberOfMostUsefullSymbol;
