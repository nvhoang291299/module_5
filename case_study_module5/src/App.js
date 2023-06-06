import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { Route, Routes } from "react-router-dom";
import TypeRoom from "./components/TypeRoom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/typeRoom">
          <TypeRoom />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
