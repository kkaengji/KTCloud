// API: 프로그램들이 서로 소통할 수 있게 해주는 통로

/* 
웹 API
Fetch API
Geolocation API
LocalStorage API

Get Post
Get: 서버로부터 데이터를 가져올 때
Post: 서버로 데이터를 보낼 때

fetch() 호출 > URL로 요청 전송 > 서버 응답 > .then()으로 응답 변환 > .catch()
*/

//fetch("https://jsonplaceholder.typicode.com/posts")
//.then((response) => response.json()) //응답을 JSON 형식으로 변환
//.then((data) => console.log(data)) //변환된 데이터를 콘솔에 출력
//.catch((error) => console.log('Error:', error)); //에러를 처리

/*
fetch("https://jsonplaceholder.typicode.com/posts"{
    method: 'POST', //메소드 POST로 변경해야 함
    body: JSON.stringify({ //해당 사이트 콘텐츠의 객체 구조
        title: 'foo',
        body: 'foo',
        userID: 3,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8', //요청의 콘텐츠 타입
    },
})
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.log('Error:', error));
*/

/*
// 현재 사용자 위치
if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        console.log('Latitude:', position.coords.latitude)
        console.log('Longitude:', position.coords.longitude)
    });
} else {
    console.error('Geolocation을 지원하지 않는 브라우저입니다.');
}
*/

// inputText라는 ID를 가진 입력창에 사용자가 글을 쓰면 실시간으로 브라우저에 내용이 저장
// 나중에 사용자가 다시 그 페이지에 방문했을 때 마지막으로 작성했던 내용이 그대로 복원
/*
const locstrg = () => {
    const inputData = document.getElementById('inputText').value;
    localStorage.setItem('note', inputData);
};

const loadData = () => {
    const savedData = localStorage.getItem('note');

    if(savedData) {
        document.getElementById('inputText').value = savedData;
    }
};

document.addEventListener('DOMContentLoaded', loadData);
const inputElement = document.getElementById('inputText');
inputElement.addEventListener('input', () => {
    //savedData();
    locstrg();
    console.log(loadData);
});
*/

// 실습
// geolocation API로 현재 본인의 위경도를 파악하고 localstorage에 저장하세요.

// localStorage에서 위치 정보를 불러와 화면에 표시하는 함수
const loadSavedLocation = () => {
    const savedLatitude = localStorage.getItem('latitude');
    const savedLongitude = localStorage.getItem('longitude');
    // 저장된 위도와 경도 값이 모두 있을 경우
    if (savedLatitude && savedLongitude) {
        document.getElementById('input_Latitude').value = savedLatitude;
        document.getElementById('input_Longitude').value = savedLongitude;

        console.log('저장된 위치를 불러왔습니다.');
    } else {
        console.log('저장된 위치 정보가 없습니다.');
    }
};

// 현재 위치를 가져와 localStorage에 저장하는 함수
const saveCurrentLocation = () => {
    if (navigator.geolocation) {
        // 현재 위치를 성공적으로 가져왔을 때 실행될 콜백 함수
        const success = (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // localStorage에 위도와 경도 저장
            localStorage.setItem('latitude', latitude);
            localStorage.setItem('longitude', longitude);
            
            console.log('위치를 성공적으로 저장했습니다.');
            alert('현재 위치가 저장되었습니다!');

            // 저장 후 화면에 바로 표시
            loadSavedLocation();
        };
        // 위치 정보를 가져오는 데 실패했을 때 실행될 콜백 함수
        const error = () => {
            alert('위치 정보를 가져오는 데 실패했습니다.');
            console.error('Geolocation 오류가 발생했습니다.');
        };
        // 현재 위치 정보 요청
        navigator.geolocation.getCurrentPosition(success, error);
    } else {
        alert('이 브라우저는 Geolocation을 지원하지 않습니다.');
        console.error('Geolocation을 지원하지 않는 브라우저입니다.');
    }
};

document.addEventListener('DOMContentLoaded', loadSavedLocation);