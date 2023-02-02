import Main from "./components/Main";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from './components/Contact.jsx';

import styles from './styles/app.module.css';
const App = () => {
  return (
    <div className={styles.app}>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Work />
      <Contact />
      
    </div>
  );

}

export default App;
