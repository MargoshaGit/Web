import styles from './assets/css/App.module.css';
import {Header} from "./components/Header";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
function App() {
    return (
        <div className={styles.app}>
            <Header />
        </div>
    );
}

export default App;
