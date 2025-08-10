import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Get current day and date
  const today = new Date();
  const day = today.toLocaleDateString("en-US", { weekday: "long" });
  const date = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const addTask = () => {
    if (task.trim() !== "") {
      setTodos([...todos, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const deleteTask = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.dateContainer}>
          <p style={styles.day}>{day}</p>
          <p style={styles.date}>{date}</p>
        </div>
        <h1 style={styles.title}>To-Do List</h1>
        <div style={styles.inputSection}>
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
            style={styles.input}
          />
          <button onClick={addTask} style={styles.addButton}>
            Add
          </button>
        </div>

        <ul style={styles.todoList}>
          {todos.map((todo, index) => (
            <li key={index} style={styles.todoItem}>
              <div style={styles.taskSection}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(index)}
                  style={styles.checkbox}
                />
                <span
                  style={{
                    ...styles.taskText,
                    textDecoration: todo.completed ? "line-through" : "none",
                    color: todo.completed ? "#888" : "#000",
                  }}
                >
                  {todo.text}
                </span>
              </div>
              <button
                onClick={() => deleteTask(index)}
                style={styles.deleteButton}
              >
                ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#e0e0e0",
  },
  container: {
    maxWidth: "500px",
    width: "100%",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    borderRadius: "10px",
    boxShadow: "0 0 10px #ccc",
  },
  dateContainer: {
    textAlign: "center",
    marginBottom: "10px",
  },
  day: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "0",
  },
  date: {
    fontSize: "16px",
    color: "#666",
    margin: "0",
  },
  title: {
    textAlign: "center",
    fontSize: "28px",
    marginBottom: "20px",
  },
  inputSection: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    marginRight: "10px",
    fontSize: "16px",
  },
  addButton: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  todoList: {
    listStyleType: "none",
    padding: 0,
  },
  todoItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid #ddd",
  },
  taskSection: {
    display: "flex",
    alignItems: "center",
    flex: 1,
  },
  checkbox: {
    marginRight: "10px",
    width: "16px",
    height: "16px",
  },
  taskText: {
    fontSize: "16px",
    cursor: "pointer",
    flex: 1,
  },
  deleteButton: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    fontSize: "18px",
  },
};

export default App;
