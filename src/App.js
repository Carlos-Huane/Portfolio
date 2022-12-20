import Main from "./components/Main";
import Navbar from "./components/Navbar";
import About from "./components/About";

import styles from './styles/app.module.css';

const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Main />
      <About />
    </div>
  );

}

export default App;
