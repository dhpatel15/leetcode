var titleToNumber = function(s) {
    const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const arr = s.split('');
    let result = 0;
    
    for (let i = 0; i < arr.length; i++) {
        result = result * 26 + str.indexOf([arr[i]]) + 1;
    };
    
    return result;
};