var levelOrder = function(root) {
    const arr = [];
    function traverse(node, level) {
        if (!node) return;
        if (arr.length <= level) arr.push([]);
        arr[level].push(node.val);
        traverse(node.left, level + 1);
        traverse(node.right, level + 1);
    }
    
    traverse(root, 0);
    return arr;
};