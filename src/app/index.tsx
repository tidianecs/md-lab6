import { View, Text, Pressable, StyleSheet } from "react-native";

function Square({ value }: { value: string }) {
  return (
    <Pressable style={styles.square}>
      <Text style={styles.squareText}>{value}</Text>
    </Pressable>
  );
}

export default function Board() {
  return (
    <View style={styles.container}>
      <View style={styles.boardRow}>
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </View>
      <View style={styles.boardRow}>
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </View>
      <View style={styles.boardRow}>
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  boardRow: { flexDirection: "row" },
  square: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: "#999",
    justifyContent: "center",
    alignItems: "center",
  },
  squareText: { fontSize: 36, fontWeight: "bold" },
});