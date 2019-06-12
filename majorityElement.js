var majorityElement = function(nums) {
    
    var obj = {};
    
    for( var i = 0; i < nums.length; i++){
        if(obj.hasOwnProperty(nums[i])){
            obj[nums[i]]++
        }else{
            obj[nums[i]] = 1
        }
    }
    
    
    for(var keys in obj){
        if(obj[keys] > nums.length / 2){
            return keys            
        }
    }
};