var rightSideView = function(root) {
    let result = [], depth = 0;
    var dfs = function(root, result, depth){
        if (!root) return;
        if (depth == result.length)
            result.push(root.val);
        dfs(root.right,result, depth + 1);
        dfs(root.left, result, depth + 1);
    }
    dfs(root, result, depth);
    return result;
};