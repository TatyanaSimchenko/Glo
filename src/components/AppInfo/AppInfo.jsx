import "./AppInfo.css";

const AppInfo = ({ increased, employers }) => {
    return (
        <div className="app-info">
            <h1>Сompany staff</h1>
            <h2>Total number of staff: {employers} </h2>
            <h2>To get the prize: {increased} </h2>
        </div>
    )
};

export default AppInfo;