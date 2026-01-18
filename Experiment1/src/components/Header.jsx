const Header = ({title}) => {
    return (
        <header style={{
            padding: "2rem",
            backgroundColor: "#22c55e",
            color: "white",
            marginBottom: "0",
            width: "100%"
        }}>
            <h1 style={{
                margin: 0,
                fontSize: "4rem",
                fontWeight: "bold",
                textAlign: "left"
            }}>{title}</h1>
        </header>
    );
}
export default Header;