var backspaceCompare = function(S, T) {
    const backedS = backStr(S)
    const backedT = backStr(T)
  
    return backedS == backedT
};

function backStr(str) {
    let res = ""
    let count = 0
    
    for (let i = str.length - 1; i >= 0; i--) {
        if (str.charAt(i) == '#') {
            count++
        } else if (count > 0) {
            count--
        } else {
            res = str.charAt(i) + res
        }
    } 
    
    return res
}