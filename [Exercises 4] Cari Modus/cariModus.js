function cariModus(arr) {
    // you can only write your code here!
    list = {}
    curr = 1
    largest = -1
    for(let i = 0; i < arr.length; i++)
    {
      if(!list[arr[i]]){list[arr[i]] = 1}
      else{list[arr[i]] = list[arr[i]] + 1}
    }
    for(items in list)
    {
      if(list[items] > curr){curr = list[items]; largest = items}
    }
    if(list[largest] == arr.length){return -1}
    else{return largest}
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 6, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1
  