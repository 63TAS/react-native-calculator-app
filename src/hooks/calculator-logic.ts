
import { useState } from "react";
import { calculate } from "../utils/calculatorLogic";

export function useCalculator() {
  const [display, setDisplay] = useState("0");
  const [expression, setExpression] = useState("");
  const [firstNumber, setFirstNumber] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [startNewNumber, setStartNewNumber] = useState(false);
  const [resultShown, setResultShown] = useState(false);

  function handlePress(value: string) {
    if (value === "AC") {
      setDisplay("0");
      setExpression("");
      setFirstNumber(null);
      setOperator(null);
      setStartNewNumber(false);
      setResultShown(false);
      return;
    }

    if (["+", "-", "×", "÷"].includes(value)) {
      if (display === "" || display === "Error") return;

      let number = Number(display);

      if (
        operator !== null &&
        firstNumber !== null &&
        !startNewNumber &&
        !resultShown
      ) {
        const result = calculate(firstNumber, number, operator);

        if (result === "Error") {
          setDisplay("Error");
          setExpression("Error");
          setFirstNumber(null);
          setOperator(null);
          setStartNewNumber(true);
          return;
        }

        number = Number(result);
        setDisplay(String(result));
      }

      setFirstNumber(number);
      setOperator(value);
      setExpression(`${number}${value}`);
      setStartNewNumber(true);
      setResultShown(false);
      return;
    }

    if (value === "=") {
      if (
        firstNumber === null ||
        operator === null ||
        startNewNumber
      ) {
        return;
      }

      const result = calculate(
        firstNumber,
        Number(display),
        operator
      );

      setExpression(String(result));
      setDisplay(String(result));
      setFirstNumber(null);
      setOperator(null);
      setStartNewNumber(true);
      setResultShown(true);
      return;
    }

    if (value === ".") {
      if (startNewNumber || resultShown || display === "Error") {
        const nextExpression =
          operator !== null && firstNumber !== null && !resultShown
            ? `${firstNumber}${operator}0.`
            : "0.";

        setDisplay("0.");
        setExpression(nextExpression);
        setStartNewNumber(false);
        setResultShown(false);
      } else if (!display.includes(".")) {
        setDisplay(display === "" ? "0." : display + ".");
        setExpression(expression + (display === "" ? "0." : "."));
      }
      return;
    }

    if (
      startNewNumber ||
      resultShown ||
      display === "Error" ||
      display === "" ||
      display === "0"
    ) {
      const nextExpression =
        operator !== null && firstNumber !== null && !resultShown
          ? `${firstNumber}${operator}${value}`
          : value;

      setDisplay(value);
      setExpression(nextExpression);
      setStartNewNumber(false);
      setResultShown(false);
    } else {
      setDisplay(display + value);
      setExpression(expression + value);
    }
  }

  return {
    display,
    expression,
    handlePress,
  };
}
