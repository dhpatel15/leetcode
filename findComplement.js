var findComplement = function(num) {
  var binary = (num).toString(2);
  var arr = binary.split("")
  console.log(arr)

  for(var i = 0; i < arr.length; i++){
    if(arr[i] === '1'){
      arr[i] = '0'
    }else{
      arr[i] = '1'
    }
  }
  var opposite = arr.join('')
  return parseInt( opposite, 2 )
};