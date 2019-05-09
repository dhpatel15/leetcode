var findDuplicate = function(nums) {
  let len = nums.length
  for(let i = 0; i < len; i++ ){
    if(nums[Math.abs(nums[i])] >= 0){
      nums[Math.abs(nums[i])] = -nums[Math.abs(nums[i])]
    }else{
      return Math.abs(nums[i])
    }
  }
  
  return null;
};