// components
import AddTodo from "./Components/AddTodo";
import Navbar from "./Components/Navbar";
import Todos from "./Components/Todos";

function App() {
  return (
    <>
      <h1>React + TS Practice Project</h1>
      <Navbar />
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
