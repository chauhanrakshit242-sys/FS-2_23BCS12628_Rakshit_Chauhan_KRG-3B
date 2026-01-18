import { logs } from "../data/logs";

const Dashboard = () => {
    const totalCarbon = logs.reduce((sum, log) => {
        return sum + log.carbon;
    }, 0);
    
    return (
        <div style={{ marginBottom: "3rem" }}>
            <h2>DASHBOARD</h2>
            <p>Total Carbon Footprint: {totalCarbon} kg</p>
            <ul>
                {logs.map(log => (
                    <li key={log.id}>
                        • {log.activity} = {log.carbon} kg
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Dashboard;