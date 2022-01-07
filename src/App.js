import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Aside from "./components/Aside";
import Footer from "./components/Footer";


import data from "./data/articles.json";
import navItems from "./data/navItems.json";
import asideItems from "./data/asideItems.json";
import footerItems from "./data/footerItems.json";

function App() {
  return (
    <div className="App">
      <Header text="Блог (l3_t3 упр. 2 - 3)" />
      <div className="wrapper" >
        <Nav navItems={navItems} />
        <Main articles={data} />
        <Aside asideItems={asideItems} />
      </div>
      <Footer footerItems={footerItems} />
    </div>
  );
}

export default App;
