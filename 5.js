"use strict";

let isPrime = (num) => {
    let count = 0;

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            count++;
        }
    }
    if (count === 2) {
        return true
    } else return false
};

// isPrime(0);
// isPrime(1);
// isPrime(17);
// isPrime(10000000000000);


let factorial = (num) => {
    let count = 1;

    if (num > 0) {
        for (let i = num; i > 0; i--) {
            count *= i;
        }
    }
    return count
};

// factorial(0);
// factorial(1);
// factorial(6);


function fib(n) {
    if (n <= 0) return 0;
    else if (n === 1) return 1;
    else return fib(n - 1) + fib(n - 2);
}

// fib(0);
// fib(1);
// fib(10);
// fib(20);


let isSorted = (arr) => {
    let count = 0;
    let newArr = arr.slice().sort(function (a, b) {
        return a - b;
    });

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== newArr[i]) {
            count++;
        }
    }

    if (count === 0) {
        return true;
    }
    else return false;
};

// isSorted([]);
// isSorted([-Infinity, -5, 0, 3, 9]);
// isSorted([3, 9, -3, 10]);


let reverse = (str) => {
    return str.split('').reverse().join('');
};

// reverse('');
// reverse('abcdef');


let indexOf = (arr, n) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return i
        }
    }
    return -1;
};

// console.log(indexOf([1, 2, 3], 1));
// console.log(indexOf([1, 2, 3], 4));


let isPalindrome = (str) => {
    str.split('');

    let newStr = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            newStr.push(str[i]);
        }
    }

    let strReverse = [];
    for (let i = str.length; i >= 0; i--) {
        if (str[i] !== ' ') {
            strReverse.push(str[i]);
        }
    }

    return newStr.join('').toLowerCase() === strReverse.join('').toLowerCase()
};

// isPalindrome('');
// isPalindrome('abcdcba');
// isPalindrome('abcd');
// isPalindrome('A man a plan a canal Panama');

let missing = (arr) => {
    let newArr = arr.slice().sort(function (a, b) {
        return a - b;
    });

    let min = newArr[0];
    let max = newArr[newArr.length - 1];
    let perfectArr = [];
    let result = [];

    for (let i = min; i <= max; i++) {
        perfectArr.push(min++);
    }

    for (let i = 0; i < perfectArr.length; i++) {
        if (newArr.indexOf(perfectArr[i]) === -1) {
            result.push(perfectArr[i]);
        }
    }

    if (result.length > 0) {
        return result
    }
};

// missing([]);                         // undefined
// missing([1, 4, 3]);                  // 2
// missing([2, 3, 4]);                  // 1
// missing([5, 1, 4, 2]);               // 3
// missing([1, 2, 3, 4]);               // undefined

let isBalanced = (str) => {
    str.split('');
    let count = 0;
    let newStr = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '{' || str[i] === '}') {
            newStr.push(str[i]);
        }
    }

    for (let i = 0; i < newStr.length; i++) {
        if (count === 0 && newStr[i] === '}') {
            return false
        } else if (newStr[i] === '{') {
            count++;
        } else if (newStr[i] === '}') {
            count--
        }

    }

    if (count !== 0) {
        return false
    }

    for (let i = 0; i < newStr.length / 2; i++) {
        if (newStr[i] !== '{' || newStr[newStr.length - i - 1] !== '}') {
            return false
        }
    }
    return true;
};

// isBalanced('}{');
// isBalanced('{{}');
// isBalanced('{}{}');
// isBalanced('foo { bar { baz } boo }');
// isBalanced('foo { bar { baz }');
// isBalanced('foo { bar } }');