import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function PomodoroScreen() {
  const [time, setTime] = useState(25 * 60); // Timer starts at 25 minutes (in seconds)
  const [isRunning, setIsRunning] = useState(false); // Track if the timer is running

  // Timer logic
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => (prev > 0 ? prev - 1 : 0)); // Decrease time every second
      }, 1000);
    }
    return () => clearInterval(timer); // Clear timer when paused or unmounted
  }, [isRunning]);

  // Format time as MM:SS
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{formatTime(time)}</Text>{" "}
      {/* Display formatted time */}
      <Button
        title={isRunning ? "Pause" : "Start"}
        onPress={() => setIsRunning(!isRunning)}
      />
      <Button title="Reset" onPress={() => setTime(25 * 60)} />{" "}
      {/* Reset timer */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  timer: { fontSize: 48, marginBottom: 20 },
});
