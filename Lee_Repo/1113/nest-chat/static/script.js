const socket = io('http://localhost:3000/chat');
const roomSocket = io('http://localhost:3000/room');
const nickname = prompt('닉네임을 입력해주세요.');

function sendMessage() {
  const message = $('#message').val();
  $('#chat').append(`<div>나 : ${message}</div>`);
  socket.emit('message', { message, nickname });
}

socket.on('connect', () => {
  console.log('connected');
});

socket.on('message', (message) => {
  $('#chat').append('<div>' + message + '</div>');
});

function createRoom() {
  const room = prompt('채팅방 이름을 입력해주세요.');
  roomSocket.emit('createRoom', { room, nickname });
}

roomSocket.on('rooms', (data) => {
  console.log(data);
  $('#rooms').empty();
  data.forEach((room) => {
    $('#rooms').append(
      `<li>${room} <button onClick="joinRoom('${room}')">참여</button></li>`,
    );
  });
});
function joinRoom(room) {
  roomSocket.emit('joinRoom', { room, nickname, toLeaveRoom: currentRoom });
  document.querySelector('#chat').innerHTML = '';
  currentRoom = room;
}

socket.on('connect', () => {
  console.log('connected');
});

socket.on('message', (message) => {
  document.querySelector('#chat').innerHTML += `<div>${message}</div>`;
});
