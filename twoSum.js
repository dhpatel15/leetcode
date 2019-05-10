var twoSum = function(nums, target) {
  var result = [];
  var hashTable = {};

  for(var i = 0; i < nums.length; i++){
    hashTable[nums[i]] = i
  }


  for(var i = 0; i < nums.length; i++){
    var sum = target - nums[i]
    if(hashTable.hasOwnProperty(sum) && i !== hashTable[sum]){
      result.push(i, hashTable[sum])
      break;
    }
  }
  
  
  
  return result;
};