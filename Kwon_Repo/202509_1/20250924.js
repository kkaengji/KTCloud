console.log('다들 만나서 반갑습니다.')
console.log(30)
console.log(20)

console.log(typeof 1)
console.log(typeof 1.1)
console.log(typeof 3.14)
console.log(typeof 'me')
console.log(typeof true)
console.log(typeof false)

//변수 선언
var x = 30;
let y = 20;
const z = 10;

//콘솔창 출력
console.log(x)
console.log(y)
console.log(z)

//변수 타입 확인
console.log(typeof x)
console.log(typeof y)
console.log(typeof z)

//var : 함수영역
function example() {
    var x = 20;
    if(true){
        var x = 50;
        console.log("inside id : " + x);
    }
    console.log("outside id : " + x)
    x = 60;
    console.log('final : ' + x)
}

example()

//let : 블록영역 
function Letexample() {
    let y = 20;
    if(true){
        let y = 50;
        console.log("inside id : " + y);
    }
    console.log("outside id : " + y);
    y = 60;
    console.log('final : ' + y);
}

Letexample()

//undefined와 null
var kkaeng = null
console.log(kkaeng)

//객체 생성
let human = {
    a : "홍길동",
    b : 35,
    c : 174
};

console.log(human["a"])
console.log(human["b"])
console.log(human["c"])

let MyArray = [1, 2, 3]
console.log(MyArray[0])

//배열 Array
let Custom = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

console.log(Custom[1])
console.log(Custom[0])
console.log(Custom[2])

// 1. Array, 행렬, 객체(키-값 쌍) 만들기
// 10 ~ 90
// 행렬은 세줄씩
// 객체 : 이름, 혈액형, MBTI
let Array1 = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90],
]

console.log(Array1[0])
console.log(Array1[2])
console.log(Array1[1])

let Object2 = {
    name : "남경진",
    bloodType : "AB",
    MBTI : "ESTJ",
    user_height : 168
};

console.log(Object2["name"])
console.log(Object2["bloodType"])
console.log(Object2["MBTI"])
console.log(Object2["user_height"])

// 2. var과 let 서로 다른 영역 확인하기
// let 기준 80, 100, 10
//var : 함수영역
function var_ex() {
    var x2 = 80;
    if(true){
        var x2 = 100;
        console.log("var_in : " + x2);
    }
    console.log("var_out : " + x2)
    x2 = 10;
    console.log('var_final : ' + x2)
}

var_ex()

//let : 블록영역 
function let_ex() {
    let y2 = 80;
    if(true){
        let y2 = 100;
        console.log("let_in : " + y2);
    }
    console.log("let_out : " + y2)
    y2 = 10;
    console.log('let_final : ' + y2)
}

let_ex()