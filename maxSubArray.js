var maxSubArray = function(nums) {
  let currentMax = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    currentMax = Math.max(currentMax + nums[i], nums[i]);
    max = Math.max(currentMax, max);
  }
  
  return max;
};