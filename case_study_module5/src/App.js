import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { Route, Routes } from "react-router-dom";
import TypeRoom from "./components/TypeRoom";

function App() {
  return (
    <>
      <Header />
      <TypeRoom />
      <Footer />
    </>
  );
}

export default App;
