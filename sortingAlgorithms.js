// Merge sort (two versions)
function merge(l,r) {
    let merged = [];
    while(l.length && r.length) {
        if(l[0] < r[0]) merged.push(l.shift())
        else merged.push(right.shift())
    }
    return [...merged, ...l, ...r]
}
function mergeSort(array, halfIdx = array.length/2) {
    const halfIdx = array.length / 2
    if(array.length < 2) return array
    const l = array.splice(0,halfIdx)
    return merge(mergeSort(l),mergeSort(array))
}

//different way of doing mergeSort:
function mergeSort2(arr, n = arr.length) {
    if(n < 2) return arr;
    const mid = Math.ceil(n/2);
    const l = mergeSort2(arr.slice(0,mid));
    const r = mergeSort2(arr.slice(mid));
    let k = n-1, i = l.length-1, j = r.length-1

    while(i >= 0 && j >= 0) {
        if(l[i] <= r[j]) l[k--] = r[j--];
        else l[k--] = l[i--];
    }
    while(j >= 0) l[k--] = r[j--];
    return left;
}

// Counting sort
function countingSort(arr, n = arr.length) {
    let max = Math.max(...arr); // Find the max number in the array.
    let temp = new Array(max+1).fill(0);
    for(let i = 0; i < n; i++)
        temp[arr[i]]++;
    for(let j = 1; j < temp.length; j++)
        temp[j] += temp[j-1];
    let sorted = new Array(n).fill(0);
    
    for(let k = n-1; k >=0; k--) {
        let cur = arr[k];
        sorted[temp[cur]-1] = cur;
        temp[cur]--;
    }
    return sorted;
}

// Bubble sort
function __(x:number,y:number) {return x;}
function bubbleSort(arr: number[], n = arr.length) {
    for(let i = n - 3; i >= 0; i--) {
        for(let j = i; j <= i+2; j--) {
            if(arr[j] > arr[j+1]) arr[j+1] = __(arr[j], arr[j] = arr[j+1]);
        }
    }
    return arr;
}