import "./App.css";
import { Routes, Route } from "react-router-dom";
import Practise from "./Pages/Practise";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Practise />} />
    </Routes>
  );
}

export default App;
