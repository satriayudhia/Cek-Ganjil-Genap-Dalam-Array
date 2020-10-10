function findOutlier(integers){
  var result
  var genap = []
  var ganjil = []
  for (var i = 0; i < integers.length; i++) {
    if (integers[i] % 2 == 0) {
      genap[i] = integers[i]
    }
    else ganjil[i] = integers[i]
  }
  
  if (genap.length > ganjil.length) {
    result = ganjil
  }
  else result = genap

  return (
  result.filter(function (el) {
      return el != null;
    }))
}