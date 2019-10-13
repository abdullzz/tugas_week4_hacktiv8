function changeMe(arr) {
    // you can only write your code here!
    temp = {}
    for(let i = 0; i < arr.length; i++)
    {
      temp['firstName'] = arr[i][0]
      temp['lastName'] = arr[i][1]
      temp['gender'] = arr[i][2]
      temp['age'] = arr[i][3]
      if(new Date().getFullYear() - temp["age"] < 0 || !arr[i][3]){temp['age'] = 'Invalid Birth Year'}
      console.log(temp['firstName'] + " " + temp['lastName'] + ": " + JSON.stringify(temp))
      temp = {}
    }
  }
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 37 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
  changeMe([]); // ""