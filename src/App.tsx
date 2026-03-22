import AboutMe from "./components/aboutMe";
import Navbar from "./components/navbar";
import "./i18n/i18n";

const App = () => {
  return (
    <main>
      <Navbar />
      <AboutMe />
    </main>
  );
};

export default App;
