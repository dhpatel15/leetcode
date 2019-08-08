var invertTree = function(root) {
    if(!root){
        return root;
    }else{
        var temp = root.right;
        root.right = root.left;
        root.left = temp;
    }
    
  invertTree(root.left)
  invertTree(root.right)
    
    return root;
};