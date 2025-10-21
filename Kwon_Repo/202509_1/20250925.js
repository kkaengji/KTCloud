// 함수
let name;

function MyOwn() {
    console.log("Hello, World!");
}

MyOwn();

function MyName(name){
    console.log("Hello, " + name);
}
MyName("Kyung-Jin");

// 여러가지 함수 출력
let a;
let b;

function add(a, b){
    console.log(a + b);
}
add(2, 3);

function add2(a, b){
    return a + b;
}
console.log(add2(2, 3));

function add3(a, b){
    const result = a + b;
    return result;
}
console.log(add3(2, 3))

// 곱하기(*), 나누기_몫(/)_나머지(%), n제곱(**)
function nTimes(x, count = 2){
    return x * count;
}
console.log(nTimes(5));
console.log(nTimes(5, 3));

// 함수 표현식
function sub(a, b){
    console.log(a - b);
}

const sub2 = function (a, b){
    console.log(a - b);
}

// 화살표 함수
const sub3 = (a, b) => {
    console.log(a - b);
}

const sub4 = (a, b) => a - b;

sub(5, 3);
sub2(5, 3);
sub3(5, 3);
console.log(sub4(5, 3));

const noVariable = () => {
    console.log('no Variable');
}
noVariable();

// 콜백 함수
// 다른 함수의 인자로 전달되어, 특정 작업이 완료된 후 호출되는 함수
function whatYourName(name, callback){
    console.log('이름 : ', name);
    callback();
}

function sayHello() {
    console.log('안녕하세요!');
}

whatYourName('홍길동', sayHello);

// 백틱(`) 여러 줄의 문자열을 작성하거나 변수를 문자열 안에 쉽게 포함
function sample(variable1, variable2, callback){
    console.log(`첫 번째 인자 : ${variable1}`);
    console.log(`두 번째 인자 : ${variable2}`);
    const result = variable1 + variable2;
    callback(result); // 콜백 함수에 결과값 전달
}

sample(5, 6, (result) => {
    console.log(`인자의 합 : ${result}`);
});

// 실습
// x의 y제곱을 반환하는 함수
function square(x, y){
    let result = 1;
    for(let i = 0; i < y; i++){
        result *= x; //result = result * x;
    }
    return console.log(result);
}
square(2, 2);

// x의 y제곱을 반환하는 함수
// y값이 지정되지 않으면 x의 제곱을 반환하는 함수
function square2(x, y = 2){
    let result = 1;

    for(let i = 0; i < y; i++){
        result *= x; //result = result * x;
    }
    return console.log(result);
}

square2(2);
square2(2, 2);

// 큰 값을 반환하는 함수
function findMax(a, b){
    if(a > b)
        return a;
    else if (a < b)
        return b;
    else
        return '같다.';
}
console.log(findMax(2, 3));

// 화살표 함수를 사용해
// 매개변수로 전달된 값이 짝수인지 홀수인지 true, false
const isEven = (num) => num % 2 === 0;

function isEven2(num){
    return num % 2 === 0;
}

// 배열
let fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[1]);
fruits[1] = 'blueberry';
console.log(fruits);
console.log(fruits[1]);

// push: 배열의 뒤에 새로운 요소를 추가
let fruits2 = ['apple', 'banana'];
fruits2.push('cherry');
console.log(fruits2);
fruits2.push('melon');
console.log(fruits2);

let numbers = [1, 2, 3];
numbers.push(4, 5);
console.log(numbers);

// pop: 배열의 마지막 요소를 따로 떼어내는
let fruits3 = ['apple', 'banana', 'cherry', 'melon'];
let lastFruit = fruits3.pop();
console.log(lastFruit);
console.log(fruits3);

let numbers2 = [1, 2, 3, 4, 5];
let lastNumber = numbers2.pop();
console.log(lastNumber);
console.log(numbers2);

// shift: 배열의 첫번째 요소를 따로 떼어내는
fruits = ['apple', 'banana', 'cherry'];

let firstfruits = fruits.shift();
console.log(firstfruits);
console.log(fruits);

// unshift: 배열의 앞에 새로운 요소를 추가
fruits.unshift('apple');
console.log(fruits);

// slice(a, b): a부터 (b-1)번째 요소까지 복사
// 배열의 일부를 복사하여 새로운 배열을 반환 (기존 배열 변경x)
fruits = ['apple', 'banana', 'cherry', 'melon'];
let ab = fruits.slice(1, 3);
console.log (ab);

// array.splice(시작 인덱스, 제거할 요소의 수, [추가할 요소들...])
// 요소를 추가, 제거 또는 교체 (원본 배열을 직접 변경)
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Jun'];
console.log(months);

months.splice(4, 1, 'May');
console.log(months)

numbers = [1, 2, 3, 4, 5, 6];
numbers.splice(2, 2);
console.log(numbers);

// array.foreach(value, index): 배열의 각 요소를 순회하면서 지정된 함수를 실행
// value(필수): 현재 처리 중인 요소의 값
// index(선택): 현재 처리 중인 인덱스
// array(선택): forEach()가 호출된 원본 배열
let fruits4 = ['apple', 'banana', 'cherry'];
fruits4.forEach((a, index) => {
    console.log(index + ': ' + a)
});

let numbers3 = [1, 2, 3];
numbers3.forEach((b) => {
    console.log(b * 2);
});

// map: 배열의 각 요소를 순회하여 새로운 배열 생성
// array.map(callbackFunction(currentValue, index, array))
let numbers4 = [1, 2, 3];
let double = numbers4.map((a) => a * 2);
console.log(double);

let fruits5 = ['apple', 'banana', 'cherry'];
let long = fruits5.map((b) => b.length > 5);
console.log(long);

// filter: 배열의 각 요소를 순회하면서 특정 조건에 맞는 요소들만 모아 새로운 배열 생성
// array.filter(callbackFunction(currentValue, index, array))
let fruits6 = ['apple', 'banana', 'cherry'];
let long2 = fruits6.filter((c) => c.length > 5);
console.log(long2);

// reduce: 배열의 모든 요소를 순회하여 하나의 값으로 줄이는 메서드
// array.reduce(callbackFunction(accumulator, currentValue, index, array), initialValue)
// initialValue: 누적값의 초기값 (지정하지 않으면 배열의 첫 번째 요소가 초기값)
let numbers5 = [1, 2, 3, 4, 5];

let product = numbers5.reduce((a, b) => a * b, 1);
console.log(product);

let sigma = numbers5.reduce((a, b) => a + b, 0);
console.log(sigma);

// 객체: 다양한 형태를 값으로 가질 수 있다.
// 속성: 이름, 키, 나이, MBTI
// 메소드: 일종의 함수
const person = {
    name: '남경진',
    height: 168,
    age: 30,
    MBTI: 'ESTJ',
    steal: function() {
        console.log('적의 무기를 뺏는다.');
    }
}

console.log(person);

console.log(person.name);
console.log(person.height);
console.log(person.age);
console.log(person.MBTI);
console.log(person.steal);

delete person.MBTI;
console.log(person.MBTI);
console.log(person);
person.steal;

function Person(name, age){
    this.name = name;
    this.age = age;
    this.Hello = function (){
        console.log('Hello, Stranger.');
    }
}

let person1 = new Person('Dan', 32);
person1.Hello();

class Person5 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(`Hello, My name is ${this.name}`);
    }
}
let person5 = new Person5('Alice', 25);
person5.sayHello();

// 객체 지향 프로그래밍: 소프트웨어를 객체로 나누어서 개발하는 방식
// 코드 재사용성, 유지보수 용이, 확장성, 높은 가독성

// 반) 절차 지향 프로그래밍: 프로그램이 데이터와 함수로 구성
// 소프트웨어를 하나의 절차로써 존재한다.
// 빠르지만 유지보수와 확장성이 떨어짐

// 계산기_절차지향
function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function mul(x, y) {
    return x * y;
}

function dev(x, y) {
    if (y !== 0) {
        return x / y;
    } else {
        return 'Error'; // 에러 메시지를 반환합니다.
    }
}

console.log(add(5, 3)); // 8
console.log(sub(5, 3)); // 2
console.log(mul(5, 3)); // 15
console.log(dev(5, 3)); // 1.666...
console.log(dev(5, 0)); // Error

// 계산기_객체지향
class Calculator{
    constructor(){
        this.currentResult = 0;
    }

    add(x) {
        this.currentResult += x;
        console.log(`Reslut: ${this.currentResult}`);
    }
    sub(x) {
        this.currentResult -= x;
        console.log(`Reslut: ${this.currentResult}`);
    }
    mul(x) {
        this.currentResult *= x;
        console.log(`Reslut: ${this.currentResult}`);
    }
    dev(x) {
        if (x !== 0) {
            this.currentResult /= x;
            console.log(`Reslut: ${this.currentResult}`);
        } else {
            console.log('Error')
        }
    }
}

const calc = new Calculator();
calc.add(5)
calc.sub(3)
calc.mul(3)
calc.dev(3)

// Extends
// 부모 클래스
class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} maske a nosie.`);
    }
}

// 자식 클래스
class Dog extends Animal{
    constructor(name, race){
        super();
        //super
        // 생성자 내에서 부모 생성자
        // Dog: 자식 클래스 // Animal: 부모클래스
        // 자식 클래스의 constructon 내에서는 super가 호출되기 전까지는 this 키워드를 사용x
        // super(): 부모클래스의 생성자를 호출하여 현재 this를 초기화하는 역할 or 부모 메서드 호출

        this.race = race;
    }
    speak(){
        console.log(`${this.name} barks.`);
    }
    run(){
        console.log(`${this.name} runs.`);
    }
}

const MyDog = new Dog(name='크롱', race='시고르자브종');
MyDog.speak();
MyDog.run();


class Cat extends Animal {
    constructor(name, color){ //name 부모클래스랑 겹침
        super(name); //부모 클래스의 name속성을 초기화
        this.color = color;
    }
}

const cat1 = new Cat('체리', '고등어');
console.log(cat1.name);
console.log(cat1.color);

// or 부모 메서드 호출
// 오버라이드: 부모 클래스의 메소드를 자식 클래스에서 재정의
// + 부모클래스의 원래 기능을 함께 사용하고 싶을 때

class Dog extends Animal {
    speak() {
        super.speak();
        console.log("멍멍");
    }
}

const dog1 = new Dog('초코');
dog1.speak();


// 실습
// 1. 배열
// push pop shift unshift slice splice
// initial array: jan ~ nov
// 모든 메소드를 최소 1회 이상 활용하여 1월과 12월만 남은 배열 생성
// 1. 초기 배열
let Months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov'];
console.log('초기 배열:', Months);

// 2. `shift()` 활용: 맨 앞의 'jan'을 제거하고 저장합니다.
const jan = Months.shift();
console.log('shift() 후:', Months);

// 3. `pop()` 활용: 맨 뒤의 'nov'을 제거합니다.
Months.pop();
console.log('pop() 후:', Months);

// 4. `splice()` 활용: 남은 모든 요소를 제거하여 배열을 비웁니다.
Months.splice(0, Months.length);
console.log('splice() 후:', Months);

// 5. `unshift()` 활용: 저장해 둔 'jan'을 다시 맨 앞에 추가합니다.
Months.unshift(jan);
console.log('unshift() 후:', Months);

// 6. `push()` 활용: 'dec'을 맨 끝에 추가합니다.
Months.push('dec');
console.log('push() 후:', Months);

// 7. `slice()` 활용: 완성된 배열을 복사하여 새로운 배열을 생성합니다. (원본 배열은 변경되지 않습니다.)
const finalArray = Months.slice(0, 2);
console.log('최종 배열 (slice()로 복사):', finalArray);

// 2. 객체
// Character 클래스 > Property: HP, MP, LV / Method : 이동(상, 하, 좌, 우)
/// 플레이어 클래스 > Property: 직업 / Method : 말걸기, 공격하기
///// 내 캐릭터(인스턴스) > Property: 이름 / Method : 스킬
/// NPC 클래스 > Property: 종족 / Method : 대답
///// 주민NPC(인스턴스) > Property: 이름 / Method : 선물하기
///// 적NPC(인스턴스) > Property: 이름 / Method : 공격하기, 방어하기

class Character {
    // 속성 (Property)
    constructor(hp, mp, lv) {
        this.hp = hp;
        this.mp = mp;
        this.lv = lv;
    }

    // 메서드 (Method)
    move(direction) {
        switch (direction) {
            case 'up':
                console.log('위로 이동합니다.');
                break;
            case 'down':
                console.log('아래로 이동합니다.');
                break;
            case 'left':
                console.log('왼쪽으로 이동합니다.');
                break;
            case 'right':
                console.log('오른쪽으로 이동합니다.');
                break;
            default:
                console.log('알 수 없는 방향입니다.');
        }
    }
}

class Player extends Character {
    // 속성 (Property)
    constructor(hp, mp, lv, job, name) {
        super(hp, mp, lv); // 부모 클래스의 속성 초기화
        this.job = job;
        this.name = name; // 내 캐릭터(인스턴스)의 고유 속성
    }

    // 메서드 (Method)
    talkTo(target) {
        console.log(`${this.name}이(가) ${target}에게 말을 걸었습니다.`);
    }

    attack(target) {
        console.log(`${this.name}이(가) ${target}을(를) 공격합니다!`);
    }

    useSkill() {
        console.log(`${this.name}이(가) 강력한 스킬을 사용합니다!`);
    }
}

class NPC extends Character {
    // 속성 (Property)
    constructor(hp, mp, lv, species, name) {
        super(hp, mp, lv); // 부모 클래스의 속성 초기화
        this.species = species;
        this.name = name; // 주민NPC/적NPC(인스턴스)의 고유 속성
    }

    // 메서드 (Method)
    answer() {
        console.log(`${this.name}: 안녕하세요.`);
    }
}

class TownNPC extends NPC {
    // 속성 및 메서드는 부모 클래스인 NPC와 동일합니다.
    // 추가적인 메서드를 가질 수 있습니다.
    giveGift(target) {
        console.log(`${this.name}이(가) ${target}에게 선물을 주었습니다.`);
    }
}

class EnemyNPC extends NPC {
    // 메서드 (Method)
    attack(target) {
        console.log(`${this.name}이(가) ${target}을(를) 공격합니다!`);
    }

    defend() {
        console.log(`${this.name}이(가) 공격을 방어했습니다.`);
    }
}

// 내 캐릭터(인스턴스) 생성
const myCharacter = new Player(100, 50, 10, '마법사', '아르칸');
console.log(myCharacter);

myCharacter.move('up');
myCharacter.talkTo('마을 주민');
myCharacter.useSkill();

console.log('--------------------');

// 주민 NPC(인스턴스) 생성
const townNPC = new TownNPC(50, 20, 5, '인간', '마을 주민');
console.log(townNPC);

townNPC.answer(); 
townNPC.giveGift('아르칸');

console.log('--------------------');

// 적 NPC(인스턴스) 생성
const enemyNPC = new EnemyNPC(200, 0, 15, '고블린', '사악한 고블린');
console.log(enemyNPC);

enemyNPC.attack('아르칸');
enemyNPC.defend();