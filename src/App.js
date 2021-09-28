import logo from "./logo.svg";
import "./App.css";
import Header from "./pages/Common/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./pages/Common/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
