const readline = require("readline");

const rl = readline.createInterface({
    input:process.stdin,
    ouput:process.stdout
})

rl.on("line",(input)=>{
    const nums = input.trim().split(/\s+/).map(Number);
    console.log(moveZero(nums));
    rl.close();
})

const moveZero = function(arr){
    let i=0;
    let n = arr.length;

    while(i < n && arr[i]!==0){
        i++;
    }
    if(i===n-1) return arr;

    let j=i+1;

    while(j<n){
        if(arr[j]!==0){
             [arr[j],arr[i]]=[arr[i],arr[j]];
             i++;
        }
        j++;
    }
    return arr;
}