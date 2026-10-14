
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CalculatorKeypad from "../components/CalculatorKeypad";
import { useCalculator } from "../hooks/calculator-logic";
import { calculatorStyles as styles } from "../styles/calculatorStyles";

export default function CalculatorScreen() {
  const { display, expression, handlePress } = useCalculator();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calculator}>
        <Text style={styles.heading}>Calculator</Text>

        <View style={styles.displayContainer}>
          <Text
            style={styles.display}
            numberOfLines={1}
            adjustsFontSizeToFit
          >
            {expression || display}
          </Text>
        </View>

        <CalculatorKeypad onPress={handlePress} />
      </View>
    </SafeAreaView>
  );
}
