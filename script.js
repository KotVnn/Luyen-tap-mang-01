const LENGTH =10;
let sample = randomArray(LENGTH);
let a = randomArray(LENGTH);
let b = randomArray(LENGTH);

// Gọi mảng random
function randomArray(length) {
    let arr = Array(length);
    f(arr, function(element, index) { // element = vị trí của mảng arr, index là giá trị của mảng arr tương ứng
        let value = Math.round(Math.random() * 100);
        arr[index] = value;
    });
    return arr;
}

function f(arr, doSomething) {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        doSomething(arr[i], i);
    }
}

// Bài 1:
function bai1(arr) {
    f(arr, function (value, i) {
        let count = null;
        if (value > 10) {
            count++;
            console.log(value + count);
        }
    })
}

// Bai 2
function bai2(arr) {
    let max = Number(arr[0]);
    let position = null;
    f(arr, function (value, i) {
        if (max < value) {
            max = value;
            position = i;
        }
    });
    return "Max value is " + max + " at array[" + position + "]";
}

// Bai 3
function bai3(arr) {
    let max = Number(arr[0]);
    let sum = null;
    f(arr, function (value, i) {
        sum += value;
        if (max < value) {
            max = value;
        }
    });
    let mediumvalue = sum / arr.length;
    return "Max value is " + max + "; Medium value is " + Math.floor(mediumvalue);
}

// Bai 4
function bai4(arr) {
    let a = null;
    let b = arr.length;
    let count = 0;
    let c = Math.floor(arr.length / 2);
    f(arr, function (value, i) {
         if (count === c) {
             // do nothing;
         } else {
            a = arr[i];
            arr[i] = arr[--b];
            arr[b] = a;
            count++;
            // console.log("arr[" + b + "] = " + arr[b] + "; value[" + i + "] = " + i + "=" + value);
         }
    });
    return arr;
}

// Bai 5
function bai5(arr) {
    let count = 0;
    f(arr, function (value, i) {
       if (value < 0) count++;
    });
    return count;
}

// Bai 6
function bai6(arr) {
    let v = Math.floor(Math.random() * 200 - 100);
    flag = "is'nt in array";
    f(arr, function (value, i) {
        if (value === v) flag = "in array";
    });
    return v + " " + flag;
}

// Bai 7
function bai7(arr) {
    let v = Math.floor(Math.random() * 100 - 200);
    flag = 0;
    let b = arr.length - 1;
    f(arr, function (value, i) {
        if (value === v && flag === 0) {
            arr[i] = arr[i + 1];
            flag++;
        } else if (flag === 1 && i < b) {
            arr[i] = arr[i + 1];
        } else if (i === b && flag === 1) {
            arr[i] = 0;
        }
    });
    console.log(v);
}

// Bai 8
function bai8(arr) {
    let draft = 0;
    f(arr, function (value, i) {
        f(arr, function (values, j) {
            if (arr[i] > arr[j]) {
                draft = arr[i];
                arr[i] = arr[j];
                arr[j] = draft;
        }
       })
    });
    return arr;
}

// Bai 9
function bai9(arr1, arr2) {
    let c = b.concat(a);
    return c;
}
// console.log(sample);
console.log(bai9(a, b));