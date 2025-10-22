import { useState } from "react";

const evaluate = (expression: string): number => {
  // This is a safer evaluation function than eval().
  // It handles operator precedence for *, /, % over +, -.
  // It does not handle parentheses.
  try {
    const tokens = expression.match(/(\d+\.?\d*|[\+\-\*\/%])/g);
    if (!tokens) return 0;

    // Pass 1: Handle *, /, %
    const highPriority: (string | number)[] = [];
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (['*', '/', '%'].includes(token)) {
        const left = highPriority.pop() as number;
        const right = parseFloat(tokens[i + 1]);
        let result;
        if (token === '*') result = left * right;
        else if (token === '/') result = right === 0 ? NaN : left / right;
        else result = left % right;
        highPriority.push(result);
        i++; // Skip next token
      } else {
        highPriority.push(token);
      }
    }

    // Pass 2: Handle +, -
    let result = parseFloat(highPriority[0] as string);
    for (let i = 1; i < highPriority.length; i += 2) {
      const operator = highPriority[i] as string;
      const right = parseFloat(highPriority[i + 1] as string);
      if (operator === '+') result += right;
      else result -= right;
    }
    return result;
  } catch (error) {
    return NaN; // Return NaN on any evaluation error
  }
};

export const useCalculator = () => {
  const [input, setInput] = useState("0");
  const [expression, setExpression] = useState("");
  const [isResult, setIsResult] = useState(false);

  const handleButtonClick = (buttonValue: string) => {
    if (["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(buttonValue)) {
      if (input === "0" || isResult) {
        setInput(buttonValue);
        setIsResult(false);
        if (isResult) setExpression("");
      } else {
        setInput(input + buttonValue);
      }
    } else if (buttonValue === ".") {
      if (isResult) {
        setInput("0.");
        setIsResult(false);
        setExpression("");
        return;
      }
      // Avoid multiple dots in the last number
      const parts = input.split(/[\+\-\*\/%]/);
      if (!parts[parts.length - 1].includes(".")) {
        setInput(input + ".");
      }
    } else if (["+", "-", "*", "/", "%"].includes(buttonValue)) {
      const lastChar = input[input.length - 1];
      if (["+", "-", "*", "/", "%"].includes(lastChar)) {
        // Replace the last operator
        setInput(input.slice(0, -1) + buttonValue);
      } else {
        setInput(input + buttonValue);
      }
      setIsResult(false);
    } else if (buttonValue === "=") {
      if (input === "0" || isResult) return;
      const lastChar = input[input.length - 1];
      if (["+", "-", "*", "/", "%"].includes(lastChar)) {
          // Do not evaluate if expression ends with an operator
          return;
      }
      setExpression(input + " =");
      const result = evaluate(input);
      setInput(String(result));
      setIsResult(true);
    } else if (buttonValue === "C") {
      setInput("0");
      setExpression("");
      setIsResult(false);
    } else if (buttonValue === "←") {
      if (isResult) return;
      if (input.length > 1) {
        setInput(input.slice(0, -1));
      } else {
        setInput("0");
      }
    }
  };

  return { displayValue: input, expression, handleButtonClick };
};