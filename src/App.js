import "./App.css";

//***components***
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";

//***Data***
import articles from "./data/articles.json";
import navItems from "./data/navItems.json";
import asideItems from "./data/asideItems.json";
import footerItems from "./data/footerItems.json";
import copyright from "./data/copyright.json";

function App() {
  return (
    <div className="App">
      <Header text="Блог (тема 3 упр. 2 - 3)" />
      <Wrapper
        navItems={navItems}
        articles={articles}
        asideItems={asideItems}
      />
      <Footer footerItems={footerItems} copyright={copyright} />
    </div>
  );
}

export default App;
