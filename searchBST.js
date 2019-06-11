var searchBST = function(root, val) {
    var result = null
    var recurse = function(tree){
        if(!tree){
            return
        }
        if(tree.val === val){
            result = tree;
            return
        }else if(val < tree.val){
            recurse(tree.left)
        }else{
           recurse(tree.right)  
        }
        
    }
    recurse(root)
    return result
};