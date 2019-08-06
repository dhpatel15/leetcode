var numJewelsInStones = function(J, S) {
  var arr = J.split('');

  var counter = 0;

  for(var i =0; i < S.length; i++){
    if(arr.includes(S[i])){
      counter++
    }
  }

  return counter
};