// 6kyu, 7kyu, 8kyu
// KATA 1 8kyu
// https://www.codewars.com/kata/572df796914b5ba27c000c90/train/javascript
const sortIt = arr => {
  let numObj = {};
  arr.forEach(num => numObj[num] = (numObj[num] || 0) + 1);
  return arr.slice().sort((a,b) => numObj[a] - numObj[b] || b - a);
}

console.log(sortIt([1,1,1,2,2,3]));

// KATA 2 8kyu
// https://www.codewars.com/kata/572fdeb4380bb703fc00002c
const isolateIt = arr => {
  return arr.map(str => {
    let mid = Math.floor((str.length / 2))
    return str.length % 2 === 0 ? `${str.slice(0, mid)}|${str.slice(mid)}` : `${str.slice(0, mid)}|${str.slice(mid + 1)}`
    });
}

 console.log(isolateIt(["abcd","efgh"]));
 console.log(isolateIt(["abcde","fghij"]));

// KATA 3 7kyu----PICK UP HERE && redo the last 5 prior to these after finishing this
//---list: https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript
// https://www.codewars.com/kata/573023c81add650b84000429
const countGrade = scores => {
  let get = (a, b) => scores.filter(score => score >= a && score < b).length;
  return { S:get(100, 101), A:get(90, 100), B:get(80, 90), C:get(60, 80), D:get(0, 60), X:get(-1, 0) };
}

console.log(countGrade([50,60,70,80,90,100])); 

// KATA 4 7kyu
// https://www.codewars.com/kata/57308546bd9f0987c2000d07
const mirrorImage = arr => {
  let a, b;
  let result = arr.some((num, i) => {
    a = num;
    b = arr[i + 1];
    return num === Number(String(b).split('').reverse().join(''));
  });
  return result ? [a, b] : [-1, -1];
}

console.log(mirrorImage([11,22,33,33,22,11]));  
console.log(mirrorImage([454,86,57,75,16,88]));

// KATA 5 8kyu
// https://www.codewars.com/kata/5731861d05d14d6f50000626
const bigToSmall = arr => [].concat(...arr).sort((a,b) => b - a).join('>');

console.log(bigToSmall([[1,2],[3,4],[5,6]]));
console.log(bigToSmall([[1,3,5],[2,4,6]]));


////THE LIST OF TRAINING
// https://www.codewars.com/kata/5722b3f0bd5583cf44001000/train/javascript

