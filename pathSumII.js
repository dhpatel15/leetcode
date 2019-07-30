var pathSumII = function(root, sum) {
  let res = [];
  function helper(node, cur, arr){
      if(!node) return;
      arr.push(node.val);
      cur += node.val;
      if(!node.left && !node.right){
          if(cur === sum) res.push(arr);
          return;
      }
      helper(node.left, cur, arr.slice());
      helper(node.right, cur, arr.slice());
  }
  helper(root, 0, []);
  return res;
};