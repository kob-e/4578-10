function bSearch(arr, len, num) {
    var mid = Math.floor(len / 2);

    if (arr[mid] == num) {
        return mid;
    }

    if (arr[mid] < num) {
        return mid + bSearch(arr.slice(mid), len - mid, num);  // right side
    } else if (arr[mid] > num) {
        return bSearch(arr.slice(0, mid), mid, num); // left side
    } 
}


var arr = [23 ,24 ,24 ,77, 101];
console.log(arr[1], bSearch(arr, arr.length, arr[1]) == 1);

/*
for(var i=0; i < arr.length; i++) {
    console.log(arr[i], bSearch(arr, arr.length, arr[i]) == i)
}
*/

