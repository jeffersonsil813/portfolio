import Hero from "./components/hero";
import Navbar from "./components/navbar";
import "./i18n/i18n";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
};

export default App;
