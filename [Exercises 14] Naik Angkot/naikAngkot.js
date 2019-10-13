function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    arr = []
    //your code here
    for(let i = 0; i < arrPenumpang.length; i++)
    {
      temp = {}
      temp['penumpang'] = arrPenumpang[i][0]
      temp['naikDari'] = arrPenumpang[i][1]
      temp['tujuan'] = arrPenumpang[i][2]
      temp['bayar'] = (rute.indexOf(temp['tujuan']) - rute.indexOf(temp['naikDari'])) * 2000
      arr.push(temp)
    }
    return arr
  }
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]