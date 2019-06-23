var isAnagram = function(s, t) {
  if (s === '' && t === '') {
  return true;
}
if (s.length !== t.length) {
  return false;
}
const frequency = {};
for (let i = 0; i < s.length; i++) {
  if (!frequency[s[i]]) {
    frequency[s[i]] = 1;
  } else {
    frequency[s[i]] += 1;
  }
  
  if (!frequency[t[i]]) {
    frequency[t[i]] = -1;
  } else {
    frequency[t[i]] -= 1;
  }
}
for (let letter in frequency) {
  if (frequency[letter] !== 0) {
    return false;
  }
}
return true;
};