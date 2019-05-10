var isSymmetric = function(root) {
  
  if(!root){
    return true
  }

  
  const traverse = function(left, right){
    if(!left && !right){
      return true;
    }
      if(!left || !right || left.val !== right.val){
        return false
      }else{
        return traverse(left.left, right.right) && traverse(left.right, right.left)
      }
      
    
  }
  
  return traverse(root.left, root.right)
};