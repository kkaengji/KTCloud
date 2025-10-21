// 프론트엔드 CRUD 게시판을 구현
// 게시글 데이터 배열 만들기(전역 상태)
let posts = [
    { id: 1, title: "첫 글", content: "프론트엔드 CRUD를 구현해봅시다." },
    { id: 2, title: "공지사항", content: "수정/삭제 버튼을 눌러보세요." }
];

// 고유 ID 생성을 위한 카운터
let nextId = 3; 

// DOM 요소 선택
const addBtn = document.getElementById('add-btn');
const inputTitle = document.getElementById('input-title');
const inputContent = document.getElementById('input-content');
const postList = document.getElementById('post-list');

// C (Create) : 새로운 게시글 추가
function createPost() {
    const title = inputTitle.value;
    const content = inputContent.value;

    // 제목과 내용이 비어있으면 함수 종료
    if (!title || !content) {
        alert("제목과 내용을 모두 입력해주세요.");
        return;
    }

    // 새 게시글 객체 생성
    const newPost = { id: nextId, title: title, content: content };
    
    // posts 배열에 새 객체 추가
    posts.push(newPost);
    nextId++; // 다음 ID 증가

    // 입력 필드 초기화
    inputTitle.value = '';
    inputContent.value = '';

    // 목록 다시 렌더링
    renderPosts();
}

// R (Read) : 게시글 목록 렌더링
function renderPosts() {
    // 기존 목록 초기화
    postList.innerHTML = '';

    // posts 배열을 순회하며 각 게시글을 li 요소로 만듦
    posts.forEach(post => {
        const listItem = document.createElement('li');
        listItem.classList.add('post-item');
        listItem.dataset.id = post.id; // li 태그에 data-id 속성으로 id 저장

        listItem.innerHTML = `
            <div class="post-info">
                <div class="post-header">
                    <span class="post-title">${post.title}</span>
                    <div class="post-actions">
                        <button class="edit-btn">수정</button>
                        <button class="delete-btn">삭제</button>
                    </div>
                </div>
                <p class="post-content">${post.content}</p>
            </div>
            <div class="edit-form">
                <input type="text" class="edit-title" value="${post.title}">
                <textarea class="edit-content" rows="4">${post.content}</textarea>
                <button class="save-btn">저장</button>
                <button class="cancel-btn">취소</button>
            </div>
        `;
        postList.appendChild(listItem);
    });

    // 새로 생성된 버튼들에 이벤트 리스너 추가
    attachButtonListeners();
}

// 모든 버튼에 이벤트 리스너를 할당하는 함수
function attachButtonListeners() {
    const postItems = document.querySelectorAll('.post-item');
    postItems.forEach(item => {
        const id = Number(item.dataset.id); // data-id 값을 숫자로 변환
        
        // 수정 버튼
        item.querySelector('.edit-btn').addEventListener('click', () => enterEditMode(item));
        // 삭제 버튼
        item.querySelector('.delete-btn').addEventListener('click', () => deletePost(id));
        // 저장 버튼
        item.querySelector('.save-btn').addEventListener('click', () => updatePost(id, item));
        // 취소 버튼
        item.querySelector('.cancel-btn').addEventListener('click', () => exitEditMode(item));
    });
}

// U (Update) : 수정 모드 진입
function enterEditMode(listItem) {
    listItem.classList.add('edit-mode');
}

// U (Update) : 수정 모드 취소
function exitEditMode(listItem) {
    listItem.classList.remove('edit-mode');
}

// U (Update) : 게시글 수정
function updatePost(id, listItem) {
    const editTitle = listItem.querySelector('.edit-title').value;
    const editContent = listItem.querySelector('.edit-content').value;

    if (!editTitle || !editContent) {
        alert("수정할 제목과 내용을 모두 입력해주세요.");
        return;
    }
    
    // posts 배열에서 해당 id를 가진 post 찾기
    const postToUpdate = posts.find(post => post.id === id);
    if (postToUpdate) {
        postToUpdate.title = editTitle;
        postToUpdate.content = editContent;
    }

    // 목록 다시 렌더링
    renderPosts();
}

// D (Delete) : 게시글 삭제
function deletePost(id) {
    if (confirm("정말로 이 게시글을 삭제하시겠습니까?")) {
        // filter() 메서드를 사용하여 특정 id의 객체를 제외한 새로운 배열을 만듦
        posts = posts.filter(post => post.id !== id);
        // 목록 다시 렌더링
        renderPosts();
    }
}

// '게시글 작성' 버튼에 클릭 이벤트 리스너 추가
addBtn.addEventListener('click', (event) => {
    event.preventDefault(); // form의 기본 제출 동작 방지
    createPost();
});

// 페이지 초기 로드 시 게시글 목록 렌더링
renderPosts();


/*
사용할만한 함수 또는 메서드
parseInt() / parseFloat()    문자열 형태의 입력 값 (input.value)을 숫자로 변환할 때 사용. (예: 위치 계산, 카운터 증가)
Math.random()    0과 1 사이의 난수를 생성. (예: 로또 번호 생성, 게임에서 데미지 계산)
Math.floor()    숫자를 내림하여 정수로 만들 때 사용. (예: Math.random()으로 생성된 난수 범위를 조정할 때)
.trim()    입력 필드 값의 앞뒤 공백을 제거하여 유효성 검사 시 사용. (예: 게시글 제목, 내용)
.includes(sub)    특정 문자열(sub)이 포함되어 있는지 true/false로 검사. (예: 검색 필터링)
.split(separator)    문자열을 특정 구분자(' '나 ',')로 나누어 배열로 만들 때 사용.
.forEach(callback)    배열의 모든 요소를 순회하며 각 요소에 대해 함수(콜백)를 실행. (예: 목록 Read 시 DOM 요소 생성)
.push(item)    배열의 맨 끝에 새로운 요소(객체)를 추가. (예: 게시글 Create 시 사용)
.filter(callback)    조건에 맞는 요소만 남기고 새로운 배열을 반환. (예: Delete 시 특정 ID를 제외, 특정 상태만 필터링)
.find(callback)    조건에 맞는 첫 번째 요소를 찾아 반환. (예: Update 시 특정 ID의 게시글 객체를 찾아 수정할 때)
.map(callback)    배열의 모든 요소를 변형하여 새로운 배열을 반환. (예: 배열의 모든 데이터에 특정 속성을 추가/변경)
document.getElementById()    ID를 기반으로 단일 요소 선택. (가장 빠름)
document.querySelector()    CSS 선택자로 첫 번째 일치 요소를 선택.
document.querySelectorAll()    CSS 선택자로 일치하는 모든 요소를 NodeList 형태로 반환. (반복문 필요)
document.createElement()    새로운 HTML 요소를 메모리상에 생성. (예: <li>, <button>)
.addEventListener()    요소에 이벤트 핸들러(함수)를 연결. (예: 'click', 'keydown')
.appendChild()    부모 요소에 자식 요소를 맨 끝에 추가. (예: <ul>에 <li> 추가)
.remove()    자기 자신 요소를 DOM 트리에서 제거. (예: 목록 항목 Delete 시)
.classList.add() / .remove() / .toggle()    CSS 클래스를 추가/제거/토글하여 스타일이나 상태를 변경. (예: 수정 모드, 하이라이트)
.value    <input>, <textarea> 등 폼 요소의 현재 값을 읽거나 설정. (예: 게시글 Create 시 입력값)
.textContent / .innerHTML    요소 내부의 텍스트 또는 HTML 구조를 읽거나 설정. (예: 게시글 목록 Read 시 내용 표시)
*/