import styles from "./ButtonPanel.module.css";

interface ButtonPanelProps {
  onButtonClick: (buttonValue: string) => void;
}

const buttonValues = [
  "C",
  "←",
  "%",
  "/",
  "7",
  "8",
  "9",
  "*",
  "4",
  "5",
  "6",
  "-",
  "1",
  "2",
  "3",
  "+",
  "0",
  ".",
  "=",
];

const ButtonPanel = ({ onButtonClick }: ButtonPanelProps) => {
  const getButtonClassName = (btn: string) => {
    const isOperator = ["%", "/", "*", "-", "+"].includes(btn);
    const isFunction = ["C", "←"].includes(btn);
    const isEquals = btn === "=";

    if (isOperator) return styles.operator;
    if (isFunction) return styles.function;
    if (isEquals) return styles.equals;
    return "";
  };

  return (
    <div className={styles.buttonPanel}>
      {buttonValues.map((btn) => (
        <button
          onClick={() => onButtonClick(btn)}
          key={btn}
          className={`${styles.button} ${getButtonClassName(btn)}`}
        >
          {btn}
        </button>
      ))}
    </div>
  );
};

export default ButtonPanel;
