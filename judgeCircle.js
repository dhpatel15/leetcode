var judgeCircle = function(moves) {
  let hash = {}; 
  
  for(let i = 0; i < moves.length; i++){
    if(hash.hasOwnProperty(moves[i])){
      hash[moves[i]]++;
    }else{
      hash[moves[i]] = 1;
    }
  }
  
  if(hash["L"] === hash["R"] && hash["U"] === hash["D"]){
    return true;
  }else{
    return false;
  }
};