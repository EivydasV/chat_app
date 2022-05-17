import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ContactMe from "./pages/CantactMe";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactme" element={<ContactMe />} />
      </Routes>
    </>
  );
}

export default App;
