import React from "react";
import ButtonPanel from "../components/ButtonPanel";
import Display from "../components/Display";
import { useCalculator } from "../hooks/useCalculator";
import styles from "./Calc.module.css";

// 계산기의 전체적인 틀, 화면, 버튼 등 눈에 보이는 UI부분
const Calc = () => {
  const { displayValue, expression, handleButtonClick } = useCalculator();

  return (
    <div className={styles.calculator}>
      <Display value={displayValue} expression={expression} />
      <ButtonPanel onButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calc;
