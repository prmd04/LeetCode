let nums = [2,7,11,15], target = 9;

const TwoSum = function(nums,target){
    const map = new Map();

    for(let i=0;i<nums.length;i++){
        if(map.has(target-nums[i])){
            return [map.get(target-nums[i]),i]
        }
        map.set(nums[i],i);
    }
    return [-1,-1];
}

console.log(TwoSum(nums,target));