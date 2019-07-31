var partitionLabels = function(S) {
    if(!S || !S.length) return [];
    let dict = new Array(26);
    
    // record the last appearance of every char in S
    for(let i = 0; i < S.length; i++) {
        dict[S[i].charCodeAt(0) - 'a'.charCodeAt(0)] = i;
    }

    let result = [], start = 0, end = 0;
    for(let i = 0; i < S.length; i++) {
        end = Math.max(end, dict[S[i].charCodeAt(0) - 'a'.charCodeAt(0)]);
        if(i === end) {
            result.push(end - start + 1);
            start = i + 1;
        }
    }
    return result;
};