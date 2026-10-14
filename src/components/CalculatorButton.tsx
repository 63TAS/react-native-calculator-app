
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from "react-native";

type CalculatorButtonProps = {
  title: string;
  onPress: () => void;
  color?: string;
  textColor?: string;
};

export default function CalculatorButton({
  title,
  onPress,
  color = "#292929",
  textColor = "#FFFFFF",
}: CalculatorButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <Text style={[styles.buttonText, { color: textColor }]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 75,
    margin: 5,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    fontSize: 26,
    fontWeight: "500",
  },
});
