/*
1. 마우스 오버 이벤트 발생 시 이미지 변경
   <img> 요소에 mouseover 이벤트 리스너를 연결합니다. 이벤트 발생 시 <img>의 src 속성을 대체 이미지 URL로 변경합니다.
   동일한 <img> 요소에 mouseout 이벤트 리스너를 연결합니다. 이벤트 발생 시 <img>의 src 속성을 기본 이미지 URL로 되돌립니다.
   마우스를 이미지 위로 올리면 이미지가 바뀌고, 마우스를 떼면 원래대로 돌아옵니다.
*/
const productImage = document.getElementById('productImage');

// 마우스를 이미지 위에 올렸을 때
productImage.addEventListener('mouseover', () => {
    productImage.src = 'two.png';
});

// 마우스가 이미지에서 벗어났을 때
productImage.addEventListener('mouseout', () => {
    productImage.src = 'one.png';
});

/*
2. 키보드로 상자 움직이기
   사용자가 키보드의 화살표 키를 누르면, 화면에 배치된 사각형(<div>)이 해당 방향으로 움직이도록 구현
   설정사항)
   HTML: 화면에 가로/세로 50px 정도의 사각형 <div> 요소를 하나 생성하고, id="player" 설정
   CSS: #player 요소에 반드시 position: absolute; 속성 부여. 초기 top과 left 값을 설정하여 화면에 배치
   키보드 방향키 태그명은 'Arrow Up/Down/Right/Left'
*/
const player = document.getElementById('player');

let playerX = parseInt(window.getComputedStyle(player).left);
let playerY = parseInt(window.getComputedStyle(player).top);

const moveSpeed = 10;

window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp':
            playerY -= moveSpeed;
            break;
        case 'ArrowDown':
            playerY += moveSpeed;
            break;
        case 'ArrowLeft':
            playerX -= moveSpeed;
            break;
        case 'ArrowRight':
            playerX += moveSpeed;
            break;
    }
    player.style.top = playerY + 'px';
    player.style.left = playerX + 'px';
});