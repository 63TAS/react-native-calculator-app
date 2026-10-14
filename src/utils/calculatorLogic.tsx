
export function calculate(
  firstNumber: number,
  secondNumber: number,
  operator: string
): number | string {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;

    case "-":
      return firstNumber - secondNumber;

    case "×":
      return firstNumber * secondNumber;

    case "÷":
      if (secondNumber === 0) {
        return "Error";
      }
      return firstNumber / secondNumber;

    default:
      return "Error";
  }
}
