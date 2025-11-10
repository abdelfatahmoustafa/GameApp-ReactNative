import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import MainScreen from "./screens/MainScreen";
import { useState } from "react";
import StartGame from "./screens/StartGame";
import GameOver from "./screens/GameOver";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | undefined>();
  const [gameOverRounds, setGameOverRounds] = useState<number | null>(null);

  console.log("From App", userNumber);

  function pickedNumberHandler(pickedNumber: number) {
    setUserNumber(pickedNumber);
    setGameOverRounds(null);
  }

  function gameOverHandler(rounds: number) {
    setGameOverRounds(rounds);
  }

  function startNewGameHandler() {
    setUserNumber(undefined);
    setGameOverRounds(null);
  }

  let Content = <MainScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber && gameOverRounds == null) {
    Content = (
      <StartGame userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (userNumber && gameOverRounds != null) {
    Content = (
      <GameOver
        roundsNumber={gameOverRounds}
        userNumber={userNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  }
  return (
    <SafeAreaProvider>
      <ImageBackground
        source={require("./assets/img/bg.avif")}
        resizeMode="cover"
        style={styles.background}
      >
        <SafeAreaView style={styles.container}>
          <StatusBar style="light" />
          {Content}
        </SafeAreaView>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
  },
});
