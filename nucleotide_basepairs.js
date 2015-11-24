function pair(str) {
  // Below defines a map object with all pair possibilities
  
  var map = {T:'A', A:'T', G:'C', C:'G'};
  // Then split str into a char Array
  
  strArr = str.split('');
  //replace each Array item with a 2d Array using map
  
  for (var i=0;i<strArr.length;i++){
    strArr[i]=[strArr[i], map[strArr[i]]];
  }
 return strArr;
}
pair("GCG");

// there can be any form of ATGC and it will pair it with its respective nucleotide pair. 