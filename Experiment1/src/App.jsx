import Header from "./components/Header";
import Dashboard from "./pages/dashboard";
import Logs from "./pages/logs";
import './App.css';

const App = () => {
    return (
        <div className="app-container">
            <Header title="EcoTrack Experiment-1" />
            <div className="content">
                <Dashboard />
                <Logs/>
            </div>
        </div>
    );
};

export default App;
