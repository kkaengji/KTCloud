import { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // 1초마다 seconds 값을 1씩 증가시키는 인터벌 시작
    const intervalID = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // 클린업 함수
    // 컴포넌트가 화면에서 사라질 때(unmount) 실행되어 인터벌을 정리합니다.
    return () => {
      clearInterval(intervalID);
    };
  }, []); // 빈 배열[]: 컴포넌트가 처음 마운트될 때 한 번만 이 effect를 실행

  return (
    <div>
      <p>타이머: {seconds}초</p>
    </div>
  );
};

export default Timer;
