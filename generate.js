var generate = function(numRows) {
  
  let result = [];
  
  if(numRows === 0){
    return result
  }
  
  let first = [1];
  result.push(first);
  
  for(let i = 1; i < numRows; i++){
    
    let prev = result[i-1];
    let curr = [1];
    
    for(let j = 1; j < i; j++){
      curr.push(prev[j-1] + prev[j])
    }
    
    curr.push(1);
    result.push(curr);
  }
  
  return result;
};