import { StyleSheet, Text } from "react-native";

export default function CustomTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    fontWeight: "700",
    color: "#38BDF8",  
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#38BDF8",  
    paddingHorizontal: 16,
    paddingVertical: 10,
    textAlign: "center",
    width: "80%",
    backgroundColor: "#0F172A",  
    borderRadius: 8,
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
});
