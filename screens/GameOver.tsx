import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomTitle from "../components/UI/CustomTitle";
import CustomButton from "../components/UI/CustomButton";

export default function GameOver({
    roundsNumber,
    userNumber,
    onStartNewGame,
}: {
    roundsNumber: number;
    userNumber: number;
    onStartNewGame: () => void;
}) {
    return (
        <View style={styles.container}>
            <CustomTitle>Game Over</CustomTitle>

            <View style={styles.card}>
                <Text style={styles.label}>The number was</Text>

                <View style={styles.numberPill}>
                    <Text style={styles.numberText}>{userNumber}</Text>
                </View>

                <Text style={styles.label}>Rounds taken</Text>
                <Text style={styles.roundsText}>{roundsNumber}</Text>

                <View style={styles.buttonWrap}>
                    <CustomButton onPress={onStartNewGame}>Start New Game</CustomButton>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0b1220",  
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
    },
    card: {
        width: "92%",
        maxWidth: 420,
        backgroundColor: "#0f1724",  
        paddingVertical: 28,
        paddingHorizontal: 22,
        borderRadius: 16,
        alignItems: "center",
        // subtle shadow
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.25,
        shadowRadius: 12,
        elevation: 10,
    },
    label: {
        color: "#cbd5e1",  
        fontSize: 16,
        marginTop: 6,
        letterSpacing: 0.2,
    },
    numberPill: {
        marginTop: 12,
        backgroundColor: "#06b6d4",  
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 999,
        shadowColor: "#06b6d4",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.18,
        shadowRadius: 8,
        elevation: 6,
    },
    numberText: {
        color: "#071021", 
        fontWeight: "700",
        fontSize: 20,
    },
    roundsText: {
        marginTop: 6,
        fontSize: 18,
        color: "#e6edf3", 
        fontWeight: "600",
    },
    buttonWrap: {
        marginTop: 22,
        width: "70%",
    },
});
