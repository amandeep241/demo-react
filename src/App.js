import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/pages/Navbar";

const App = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
};

export default App;