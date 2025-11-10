import React, { useEffect, useRef, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import CustomTitle from "../components/UI/CustomTitle";
import CustomButton from "../components/UI/CustomButton";
import Colors from "../components/UI/colors";

function generateRandomBetween(min: number, max: number, exclude: number) {
  if (min >= max) return min;
  const rndNum = Math.floor(Math.random() * (max - min + 1)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

type StartGameProps = {
  userNumber: number;
  onGameOver?: (rounds: number) => void;
};

export default function StartGame({ userNumber, onGameOver }: StartGameProps) {
  const initialMin = 1;
  const initialMax = 100;

  const minBoundary = useRef(initialMin);
  const maxBoundary = useRef(initialMax);

  const [currentGuess, setCurrentGuess] = useState<number>(
    generateRandomBetween(initialMin, initialMax, userNumber)
  );
  const [rounds, setRounds] = useState<number>(1);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver?.(rounds);
    }
  }, [currentGuess, userNumber, rounds, onGameOver]);

  function nextGuessHandler(direction: "lower" | "higher") {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert(
        "Don't lie!",
        "Your hint is inconsistent with the chosen number.",
        [{ text: "Sorry!" }]
      );
      return;
    }

    if (direction === "lower") {
      maxBoundary.current = currentGuess - 1;
    } else {
      minBoundary.current = currentGuess + 1;
    }

    const newRnd = generateRandomBetween(
      minBoundary.current,
      maxBoundary.current,
      currentGuess
    );
    setCurrentGuess(newRnd);
    setRounds((r) => r + 1);
  }

  return (
    <View style={styles.container}>
      <CustomTitle>Start Game Screen</CustomTitle>

      <View>
        <Text style={styles.text}>{currentGuess}</Text>
      </View>

      <View style={{ flexDirection: "row", gap: 20, justifyContent: "center" }}>
        <CustomButton onPress={() => nextGuessHandler("lower")}>
          Lower
        </CustomButton>
        <CustomButton onPress={() => nextGuessHandler("higher")}>
          Higher
        </CustomButton>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text>Rounds: {rounds}</Text>
        <Text>User number: {userNumber}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
  },
  text: {
    color: Colors.highlight,
    fontSize: 40,
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: Colors.accent,
    paddingHorizontal: 90,
    paddingVertical: 15,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderWidth: 2,
    borderColor: Colors.border,
  },
});
