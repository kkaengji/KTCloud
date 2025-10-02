// ES6:  ECMAScript 2015의 약칭으로, 2015년에 도입된 JavaScript의 여섯 번째 표준 사양

// map(): 배열의 각 요소에 대해 지정된 콜백 함수를 실행하고, 그 결과로 새로운 배열을 반환
// map.set(key, value) 
const map = new Map();
map.set("1002", "조깅, 팔굽혀펴기");
map.set("1003", "수영, 턱걸이");

console.log(map.get("1002"));
console.log(map.get("1003"));

// Set: 중복을 허용하지 않는 유일한 값들의 집합 (중복된 값을 자동으로 제거)
const set = new Set();
set.add("1002");
set.add("1003");
set.add("1002");

console.log(set.has("1002"));
console.log(set.size);

// for ... of 반복문 실습
for (const val of set) {
    console.log(val);
}

for (const val of map) {
    console.log(val);
}

// map에서 for문 사용해서 키 값만 출력하도록 구현
for (const val of map.keys()) {
    console.log(val);
}

for (const val of map.keys()) {
    console.log(map.get(val));
}