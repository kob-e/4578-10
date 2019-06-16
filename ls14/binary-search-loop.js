var arr = [];
for (var i = 0; i < 1000; i++) {
    arr.push(i+1);
}


function binarySearch(arr, num) {
    var length = arr.length;
    var mid = -1;
    var start = 0;
    var end = length - 1;

    while (start < end) {
        mid = Math.floor((end + start) / 2);
        if (arr[mid] < num) {
            start = mid;
        } else if (arr[mid] > num) {
            end = mid;
        } else if (arr[mid] === num) {
            return mid;
        }
    }
}


binarySearch(arr, 990); // 998