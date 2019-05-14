var combinationSum = function(candidates, target) {
  candidates.sort(function(a,b){return a-b});
  var result=[];
  helper(candidates,target,[],result,0);
  return result;
};

function helper(candidates, target, cur, result, idx) {
  var len = candidates.length, i, n;
  for(i=idx;i<len;i++) {
      n = candidates[i];
      cur.push(n);
      if(n===target) {
          result.push(cur.concat());
      } else if(target>n) {
          helper(candidates, target-n, cur.concat(),result, i);
      }
      cur.pop();
  }
}