// =======================================================
// getElementByID : main-title : 본인 이름
// getElementsByClassName : list-item : 본인의 특징(MBTI, 거주지, 아무거나 하나)
// =======================================================

/*
const titleById = document.getElementById('main-title');
titleById.textContent = '남경진';

const listItems = document.getElementsByClassName('list-item');
listItems[0].textContent = 'MBTI: ESTJ';
listItems[1].textContent = '거주지: 서울';
listItems[2].textContent = '취미: 클라이밍';
*/

/*
getElement(s)By(Id, ClassName, TagName)()

querySelector() : 첫 번째 일치하는 요소
querySelectorAll() : 일지하는 요소 전부
> 'CSS 선택자' 하나의 메서드를 가지고 선택할 수 있다.
*/

// main title : 풀스택, list-item: 아무거나(통일 or 셋 다 다르게)
const mainTitle = document.querySelector('#main-title');
mainTitle.textContent = '풀스택_MOD 실습중';

const listItems = document.querySelectorAll('.list-item');
listItems[0].textContent = '이름: 남경진';
listItems[1].textContent = '거주지: 서울';
listItems[2].textContent = 'MBTI: ESTJ';

// listItems.forEach((item) => {
//     item.textContent = '통일';
// });

// 속성 변경
const imgElement = document.getElementById('myImg')
imgElement.setAttribute('src', 'screenshot.png');

// 스타일 변경
const stlElement = document.getElementById('styleElement');
stlElement.style.color = 'red';
stlElement.style.fontsize = '24px'

/*
// 요소 추가
const newElement = document.createElement('div');
newElement.textContent = '새거';
newElement.style.color = 'blue';
newElement.style.fontSize = '36px'
document.body.appendChild(newElement);

const newElement2 = document.createElement('p');
newElement2.textContent = '새거2';
const container = document.getElementById('container');
container.appendChild(newElement2);
*/

// 요소 제거
const parentNode = document.getElementById('result-area');
const childNode = document.getElementById('child');

parentNode.removeChild(childNode);

const elementToRemove = document.getElementById('remove');
elementToRemove.remove();

// 실습
// 메인 타이틀, 링크 들어간 a 태그 제거
mainTitle.remove();

const myLinkRemove = document.getElementById('myLink');
myLinkRemove.remove();

// body에 자기 소개말 적기
const myIntroduction = document.createElement('p');
myIntroduction.textContent = '안녕하세요, 저는 서울에서 활동하는 풀스택 웹 개발자입니다.';
const container2 = document.getElementById('container');
container2.appendChild(myIntroduction);

// 컨테이너 맨 아래에 짧은 인사말 넣기
const greetingDiv = document.createElement('div');
greetingDiv.textContent = '감사합니다.';
greetingDiv.style.color = 'green';
greetingDiv.style.fontSize = '36px';
greetingDiv.style.textAlign = 'center';
document.body.appendChild(greetingDiv);

// =======================================================
// 1. 요소 선택 실습
// =======================================================
const title = document.querySelector('#main-title'); // ID로 선택
const addItemButton = document.getElementById('add-item-btn'); // 구식 ID 선택
const listContainer = document.querySelector('#item-list');
const allListItems = document.querySelectorAll('.list-item'); // 모든 항목 선택 (NodeList)

console.log("선택된 제목:", title.textContent);

// =======================================================
// 2. 내용 변경 및 속성 조작 실습
// =======================================================

// 버튼 클릭 시 제목 텍스트 변경 및 클래스 토글
document.querySelector('#change-text-btn').addEventListener('click', () => {
    // 텍스트 내용 변경 (textContent)
    title.textContent = "MOD 실습중!"; 
    
    // 클래스 토글
    title.classList.toggle('highlight'); 
});

// =======================================================
// 3. 요소 생성 및 추가 실습
// =======================================================

addItemButton.addEventListener('click', () => {
    // 1. 새로운 <li> 요소 생성
    const newItem = document.createElement('li');
    
    // 2. 내용 설정 및 클래스/속성 부여
    const itemNumber = listContainer.children.length + 1;
    newItem.textContent = `동적으로 추가된 ${itemNumber}번 항목`;
    newItem.classList.add('list-item');
    newItem.setAttribute('data-id', itemNumber);
    
    // 3. 목록 컨테이너의 맨 뒤에 추가 (append 사용)
    listContainer.append(newItem); 
    
    // 추가된 항목에 삭제 이벤트 리스너 등록
    newItem.addEventListener('click', function() {
        this.remove(); 
    });
    
    // 결과 영역에 메시지 표시
    document.querySelector('#result-area').innerHTML = `<p><strong>항목 ${itemNumber}</strong>가 추가되었습니다.</p>`;
});

// =======================================================
// 4. 기존 요소 삭제 실습 (각 항목에 이벤트 리스너 등록)
// =======================================================
allListItems.forEach(item => {
    item.addEventListener('click', function() {
        if (confirm(`'${this.textContent}' 항목을 정말 삭제하시겠습니까?`)) {
            this.remove(); // 클릭된 li 요소 자체를 삭제
        }
    });
});