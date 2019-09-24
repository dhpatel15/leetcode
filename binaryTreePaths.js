var binaryTreePaths = function(root) {
  
  let paths = [];
  
  if(root === null){
    return paths;
  }
  
  const dfs = function(node, path){
    path += node.val
    if(node.right === null && node.left === null){
      paths.push(path);
      return;
    }
    if(node.left){
      dfs(node.left, path + "->")
    }
     if(node.right){
      dfs(node.right, path + "->")
    }
  }
  
  dfs(root, "", paths)
  return paths
};