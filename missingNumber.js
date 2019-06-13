var missingNumber = function(nums) {
  let count = 0;
  
  for(let i = 0; i <= nums.length; i++){
    count += i
  }
  
  for(let i = 0; i < nums.length; i++){
    count -= nums[i]
  }
  
  
  return count;
};