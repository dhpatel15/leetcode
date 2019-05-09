var findKthLargest = function(nums, k) {
  const arr = nums.sort((a,b) => {
    return b-a
  })
  return arr[k-1]
};

