import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import Recipe from "./pages/Recipe/Recipe.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:id" element={<Recipe />} />
    </Routes>
  );
}

export default App;
