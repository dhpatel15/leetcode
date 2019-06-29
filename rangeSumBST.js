var rangeSumBST = function (root, L, R) {
    let result = 0;
    result = SumBST(root,0,L,R);
    return result;
};

let SumBST=function(node,sum,L,R){
    if(node!== null){
        if(node.val <= R && node.val >= L){
            sum += node.val;
        }
      
        sum = SumBST(node.left,sum,L,R);
        sum = SumBST(node.right,sum,L,R);
    }
    return sum;
}