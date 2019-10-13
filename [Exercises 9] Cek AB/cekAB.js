function checkAB(num) {
    // you can only write your code here!
    var temp = num.split("")
    var dist = 0
    var flag = true
    var char = ""
    if(temp.indexOf("a") < 0 || temp.indexOf('b') < 0){return false}
    for(let i = 0; i < temp.length; i++)
    {
      if((temp[i] == 'a' || temp[i] == 'b') && flag)
      {dist = 0; flag=false; char = temp[i]}
      else if(!(temp[i] == 'a' || temp[i] == 'b') && !flag)
      {dist+=1}
      else if((temp[i] == 'a' || temp[i] == 'b') && !flag)
      {if(dist == 3 && (temp[i] != char)){return true}}
    }
    return false
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false