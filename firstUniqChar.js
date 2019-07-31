const firstUniqChar = function(s) {
    const charCount = {};
    
    for (let i = 0; i < s.length; i += 1) {
        const letter = s[i];
        if (charCount[letter]) {
            charCount[letter] += 1;
        } else {
            charCount[letter] = 1;
        }
    }
    
    for (let i = 0; i < s.length; i += 1) {
        const letter = s[i];
        const count = charCount[letter];
        if (count === 1) return i;
    }
    
    return -1;
}