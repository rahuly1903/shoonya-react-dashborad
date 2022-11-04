// console.log(1234);

var isPalindrome = function (x) {
  let n = x;
  let temp = 0;
  while (n > 0) {
    temp = temp * 10 + (n % 10);
    console.log(n, temp);
    n = Math.floor(n / 10);
  }
  return x === temp;
  //   return x == newArr.join("") ? true : false;
};

console.log(isPalindrome(121));
