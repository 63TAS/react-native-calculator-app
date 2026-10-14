
import { View } from "react-native";

import { calculatorStyles as styles } from "../styles/calculatorStyles";
import CalculatorButton from "./CalculatorButton";

const rows = [
  ["AC", "÷", "×", "-"],
  ["7", "8", "9", "+"],
  ["4", "5", "6", "="],
  ["1", "2", "3", "."],
  ["0"],
];

type CalculatorKeypadProps = {
  onPress: (value: string) => void;
};

export default function CalculatorKeypad({
  onPress,
}: CalculatorKeypadProps) {
  return (
    <View style={styles.buttonsContainer}>
      {rows.map((row, rowIndex) => (
        <View style={styles.row} key={rowIndex}>
          {row.map((item) => {
            const isOperator = [
              "+",
              "-",
              "×",
              "÷",
              "=",
            ].includes(item);

            const isClear = item === "AC";

            return (
              <CalculatorButton
                key={item}
                title={item}
                onPress={() => onPress(item)}
                color={
                  isClear
                    ? "#A5A5A5"
                    : isOperator
                    ? "#FF9500"
                    : "#292929"
                }
                textColor={isClear ? "#111111" : "#FFFFFF"}
              />
            );
          })}
        </View>
      ))}
    </View>
  );
}
