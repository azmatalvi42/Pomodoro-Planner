import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function TodoScreen() {
  const [tasks, setTasks] = useState([]); // List of tasks
  const [task, setTask] = useState(""); // Current task input

  // Add a new task
  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now().toString(), text: task }]); // Add task with unique ID
      setTask(""); // Clear input field
    }
  };

  // Remove a task by ID
  const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((item) => item.id !== id));
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>To-Do List</Text>

      {/* Input and Add Button */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter a task"
          value={task}
          onChangeText={setTask}
        />
        <Button title="Add Task" onPress={addTask} />
      </View>

      {/* Task List */}
      <FlatList
        data={tasks} // Render tasks as a list
        keyExtractor={(item) => item.id} // Use unique ID for each task
        renderItem={({ item }) => (
          <View style={styles.taskContainer}>
            <Text style={styles.task}>{item.text}</Text>

            {/* Delete Button */}
            <TouchableOpacity onPress={() => removeTask(item.id)}>
              <Text style={styles.deleteButton}>Done</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

// Styles for the screen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 80,
    backgroundColor: "#f8f9fa",
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
    backgroundColor: "#fff",
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#e9ecef",
    borderRadius: 8,
  },
  task: {
    fontSize: 18,
    color: "#333",
    flex: 1, // Allow text to take up available space
  },
  deleteButton: {
    fontSize: 16,
    color: "#ff4d4f", // Red color for the delete button
    fontWeight: "bold",
  },
});
