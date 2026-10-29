const arr = [0,1,1,2,3,3,4,5];

const RemoveElement = function(arr){
    let i=1;
    let j=0;

    while(i < arr.length){
        if(arr[j]!==arr[i]){
            j++;
            arr[j]=arr[i];
        }
        i++;
    }
    arr.length = j+1;
    return arr;
}

console.log(RemoveElement(arr))