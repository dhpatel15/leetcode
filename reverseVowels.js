var reverseVowels = function(s) {
    let i = 0;
    let j = s.length-1;
    const vowel = new Set(['a','e','i','o','u']);
    s = s.split("");
    while (i<=j){
        let iIsV = vowel.has(s[i].toLowerCase());
        let jIsV = vowel.has(s[j].toLowerCase());
        if (iIsV && jIsV){
            let temp = s[i];
            s[i] = s[j];
            s[j] = temp;
            i++;
            j--;
        }
        if (!iIsV) i++;
        if (!jIsV) j--;
    }
    return s.join("");
};