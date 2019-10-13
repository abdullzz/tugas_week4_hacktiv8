function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var digit1 = ""
    var digit2 = ""
    var length = 0
    var curr = Number.MAX_SAFE_INTEGER
    for(let i = 0; i <= Math.round(Math.sqrt(angka)); i++)
    {
      if(angka % i === 0)
      {
        digit1 = String(i)
        digit2 = String(angka/i)
        length = (digit1+digit2).length
      }
      if(curr > length){curr = length}
    }
    return length
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2