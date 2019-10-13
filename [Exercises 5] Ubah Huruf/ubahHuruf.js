function ubahHuruf(kata) {
    // you can only write your code here!
    var arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    var result = []
    var temp = []
    temp = kata.split("")
    for(let i = 0; i < temp.length; i++)
    {
      if(arr[arr.indexOf(temp[i])] == 'z')
      {
        result.push('a')
      }
      else
      {
        result.push(arr[arr.indexOf(temp[i])+1])
      }
    }
    
    return result
  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu
  console.log(ubahHuruf('zebra')); // afcsb