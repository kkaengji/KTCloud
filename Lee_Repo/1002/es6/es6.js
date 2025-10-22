// ES6:  ECMAScript 2015의 약칭으로, 2015년에 도입된 JavaScript의 여섯 번째 표준 사양

// map(): 배열의 각 요소에 대해 지정된 콜백 함수를 실행하고, 그 결과로 새로운 배열을 반환
// map.set(key, value) 
const map = new Map();
map.set("1002", "조깅, 팔굽혀펴기");
map.set("1003", "수영, 턱걸이");

//console.log(map.get("1002"));
//console.log(map.get("1003"));

// Set: 중복을 허용하지 않는 유일한 값들의 집합 (중복된 값을 자동으로 제거)
const set = new Set();
set.add("1002");
set.add("1003");
set.add("1002");

//console.log(set.has("1002"));
//console.log(set.size);

// for ... of 반복문 실습
for (const val of set) {
    //console.log(val);
}

for (const val of map) {
    //console.log(val);
}

// map에서 for문 사용해서 키 값만 출력하도록 구현
for (const val of map.keys()) {
    //console.log(val);
}

for (const val of map.keys()) {
    //console.log(map.get(val));
}

const nums = [1, 2, 3, 4];

// map
const squares = nums.map(n => n ** 2)
console.log(`squares: ${squares}`);

// filter: 배열의 요소들을 특정 조건에 따라 걸러내어 새로운 배열 생성
const evens = nums.filter(n => n % 2 === 0);
console.log(`filter: ${evens}`);

// reduce: 모든 요소를 하나의 단일 값으로 축소
const sum = nums.reduce((acc, cur) => acc + cur, 0);
console.log(`reduce: ${sum}`);

// find: 조건에 맞는 첫 번째 요소 값, 못찾으면 undefined
const found = nums.find(n => n > 2);
console.log(`find: ${found}`);

// some: 배열의 요소 중 적어도 하나라도 주어진 조건을 만족하는지
const hasNegative = nums.some(n => n < 0);
console.log(`some: ${hasNegative}`);

// every: 배열의 모든 요소가 주어진 조건을 만족하는지 확인
const allPositive = nums.every(n => n > 0);
console.log(`every: ${allPositive}`);

// arr.flatMap(콜백함수(요소, 인덱스, 배열), thisArg)
// 배열의 각 요소에 대해 콜백 함수를 실행한 후, 그 결과를 1단계 깊이로 평탄화(flattening)하여 새로운 배열을 반환
const nested = [1, 2, 3];
const duplicated = nested.flatMap(n => [n, n]);

console.log(`flatMap: ${duplicated}`);

// 구조 분해
const user = { 
    name: "Nam",
    age: 30,
    city: "Seoul",
};

// let name = user.name;
// let age = user.age;
// let city = user.city;

// 스프레드
const { name, age, city } = user;

//const user2 = {
//    name: user.name,
//    age: user.age,
//    city: user.city,
//}

// 스프레드
const user2 = {
    ...user,
};