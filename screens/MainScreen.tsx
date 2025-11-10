import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  StyleSheet,
  Platform,
  View,
  Alert,
} from "react-native";
import Svg, {
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  Path,
} from "react-native-svg";
import CustomTitle from "../components/UI/CustomTitle";
import CustomButton from "../components/UI/CustomButton";

export default function MainScreen({
  onPickNumber,
}: {
  onPickNumber: (num: number) => void;
}) {
  const [enteredNumber, setEnteredNumber] = useState("");
  function numberInputHandler(text: string) {
    setEnteredNumber(text);
  }
  function confirmHandler() {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number! Number has to be between 1 and 99.");
      return;
    }
    onPickNumber(chosenNumber);
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.screen}
    >
      <View style={styles.container}>
        <Svg
          height="500"
          width="400"
          viewBox="0 0 400 400"
          style={StyleSheet.absoluteFill}
        >
          <Defs>
            <LinearGradient id="bgGradient" x1="0" y1="0" x2="1" y2="1">
              <Stop offset="0" stopColor="#0f172a" stopOpacity="1" />
              <Stop offset="0.45" stopColor="#2b6cb0" stopOpacity="0.95" />
              <Stop offset="1" stopColor="#7c3aed" stopOpacity="0.95" />
            </LinearGradient>

            {/* Soft radial highlight to increase depth */}
            <RadialGradient
              id="radialHighlight"
              cx="0.7"
              cy="0.25"
              rx="0.6"
              ry="0.6"
              fx="0.7"
              fy="0.25"
            >
              <Stop offset="0" stopColor="#ffffff" stopOpacity="0.12" />
              <Stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </RadialGradient>

            {/* Gradient stroke for a colorful border */}
            <LinearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="1">
              <Stop offset="0" stopColor="#7ee787" stopOpacity="1" />
              <Stop offset="1" stopColor="#ff9a8b" stopOpacity="1" />
            </LinearGradient>
          </Defs>

          {/* Fill with the linear gradient and overlay a radial highlight */}
          <Path
            d="
                            M120,0
                            C280,0 360,120 400,200
                            C360,280 280,400 120,400
                            C0,280 0,120 120,0
                            Z
                        "
            fill="url(#bgGradient)"
            stroke="url(#strokeGradient)"
            strokeWidth="3"
          />

          {/* subtle glow / highlight layer to enhance color depth */}
          <Path
            d="
                            M120,0
                            C280,0 360,120 400,200
                            C360,280 280,400 120,400
                            C0,280 0,120 120,0
                            Z
                        "
            fill="url(#radialHighlight)"
            stroke="none"
          />

          {/* soft outer glow - drawn as a big transparent stroke to simulate bloom */}
          <Path
            d="
                            M120,0
                            C280,0 360,120 400,200
                            C360,280 280,400 120,400
                            C0,280 0,120 120,0
                            Z
                        "
            fill="none"
            stroke="#ffffff"
            strokeOpacity={0.04}
            strokeWidth={30}
          />
        </Svg>

        <View style={styles.content}>
          <CustomTitle>Drop Number</CustomTitle>
          <TextInput
            placeholder="Drop Your Number here..."
            placeholderTextColor={"black"}
            style={styles.input}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredNumber}
          />
          <View style={{ flexDirection: "row", marginTop: 10, gap: 10 }}>
            <CustomButton onPress={confirmHandler}>Confirm</CustomButton>
            <CustomButton onPress={() => setEnteredNumber("")}>
              Reset
            </CustomButton>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 50,
  },
  container: {
    width: 400,
    height: 500,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    position: "absolute",
    top: 200,
    width: "100%",
    alignItems: "center",
  },

  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#ffffff7f",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#D9E2EC",
    paddingHorizontal: 12,
    color: "#000",
    fontSize: 16,
  },
});
