import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (

    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          <Route path="/projects" element={<div>Projects</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
        </Routes>
      </Router>
    </main>

  )
}

export default App
