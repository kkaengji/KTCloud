// 스타일 변경
const listItems = document.getElementsByClassName('list-item');
listItems[1].style.color = 'blue';

const box = document.getElementById('box');
box.style.fontSize = '20px'

// 목록 이름 변경
const Remove_listItems = document.querySelectorAll('#target-list li');
Remove_listItems[0].textContent = '사과';
Remove_listItems[1].textContent = '바나나';
Remove_listItems[2].textContent = '딸기';
Remove_listItems[3].textContent = '포도';
