import { logs } from "../data/logs";

const Logs = () => {
    const getItemColor = (carbon) => {
        if (carbon === 0) return "#22c55e"; // Green for 0 carbon
        if (carbon >= 4) return "#ef4444"; // Red for high carbon
        return "#ef4444"; // Red for medium carbon
    };

    return (
        <div>
            <h2>Daily Logs</h2>
            <ul>
                {logs.map(log => (
                    <li key={log.id} style={{ 
                        color: getItemColor(log.carbon)
                    }}>
                        • {log.activity} = {log.carbon} kg
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Logs;
