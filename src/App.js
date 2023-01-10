import Main from "./components/Main";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import styles from './styles/app.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Work />
    </div>
  );

}

export default App;
