/*
// 이벤트: 마우스, 키보드 사건 발생 > Trigger: 효과
// 상호작용

// 1. Event 처리방법: onclick, onmouseover
// 1-a. HTML에서 직접 이벤트를 설정
// <button onclick="alert('Button clicked!')">Click me</button>

// 1-b. JavaScript를 사용하여 요소에 이벤트 리스너를 추가하는 방식
const button = document.querySelector('button');
button.addEventListener('click', function () {
    alert('버튼 클릭!');
});

// 2. 이벤트 객체: 이벤트 발생 > 이벤트 정보 > 이벤트 객체
document.addEventListener('click', function (event) {
  console.log(event);
});

// > Pointer Event: 입력장치를 통해 발생된 이벤트
// clientX, pageX, screenX: 포인터의 위치
// target: 이벤트가 발생한 DOM 요소

// 3. 이벤트 타입
// 3-a. click 이벤트
// <button id="mouseButton">Mouse Event Button</button>
// <p id="counter"> 0 </p>

const mouseButton = document.getElementById('mouseButton');
const counterElement = document.getElementById('counter');

let count = 0;

mouseButton.addEventListener('click', function (event) {
  console.log('Mouse Event:', event); // 콘솔 창에 이벤트 객체 출력
  count++;
  counterElement.textContent = count; // 웹 페이지에 클릭 수 출력
});

// 3-b. keydown 이벤트
// <div>
//   <input type="text" id="keyboardInput" placeholder="Type something" />
// </div>

// abc 'backspace' 'enter'

// altKey, crtlKey, shiftKey : Boolean(True, False)

const keyboardInput = document.getElementById('keyboardInput');

keyboardInput.addEventListener('keydown', function (event) {
  console.log('Keyboard Event:', event);
});

// 3-c. submit 이벤트
// <div>
//   <form id="myForm">
//     <label for="name">Name:</label>
//     <input type="text" id="name" name="name" /><br /><br />
//     <label for="email">Email:</label>
//     <input type="email" id="email" name="email" /><br /><br />
//     <label for="age">Age:</label>
//     <input type="number" id="age" name="age" /><br /><br />
//     <button type="submit">Submit</button>
//   </form>
// </div>

const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('Form Submit Event:', event);

  const formData = new FormData(form);

  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
});

// 3-d. resize 이벤트
window.addEventListener('resize', function (event) {
  console.log('Window Resize Event:', event);
  const width = window.innerWidth;
  const height = window.innerHeight;
  console.log(`Width: ${width}px, Height: ${height}px`);
});
*/

/*
실습 1.
keydown Event
입력창에 입력한 text들이 바로 아래에 그대로 출력
*/

// keydown 이벤트는 모든키가 눌릴 때마다 발생
// input 이벤트는 입력창의 값이 실제로 변경되었을때 발생

const keyboardInput = document.getElementById('keyboardInput');
const keyprintElement = document.getElementById('keyprint');

keyboardInput.addEventListener('keydown', function (event) {
  console.log('전체 이벤트 객체:', event);
  console.log('입력된 키 값 (event.key):', event.key);
  
  // .key 하나씩 출력 
  // keyprintElement.textContent = event.key;
  keyprintElement.textContent = event.target.value;
});

// 4. 이벤트 전파: 캡쳐링 > 버블링
// <div class="outer">
//   <button class="inner"></button>
// </div>

const outerDiv = document.querySelector('.outer');
const innerDiv = document.querySelector('.inner');

outerDiv.addEventListener('click', function () {
  alert('Outer div clicked');
});

innerDiv.addEventListener('click', function (event) {
  //event.stopPropagation();
  alert('Inner div clicked');
});

// 5. 이벤트 동작 취소
// <a href="https://naver.com">네이버</a>

const link = document.querySelector('a');
link.addEventListener('click', function (event) {
  event.preventDefault(); //이벤트 동작 취소
  alert('Link clicked, but not navigating');
});

// 6. 이벤트 위임
//<ul>
//  <li>1번리스트</li>
//  <li>2번리스트</li>
//  <li>3번리스트</li>
//  <li>4번리스트</li>
//</ul>

document.querySelector('ul').addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    alert(event.target.textContent);
  }
});