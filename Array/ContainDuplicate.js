let arr = [1,2,3,4];

let containDuplicate = function(arr){
    let set = new Set();

    for(let i=0;i<arr.length;i++){
        if(set.has(arr[i])){
            return true;
        }
        set.add(arr[i]);
    }
    return false;
}

console.log(containDuplicate(arr));