var isPowerOfTwo = function(n) {
  if(n === 0){
    return false;
  }
  if( n === 1 ){
    return true;
  }
  
  let x = 1
  
  while(n){
    if(x === n){
      return true;
    }else if( x > n){
      return false;
    }else{
      x = x * 2;
    }
  }
};