import { Container } from "react-bootstrap";
import "./App.css";
import Blob from "./components/Blob/Blob";
import CustomNavbar from "./components/Navbar/Navbar";

// helper
import handleScroll from "./utils/ScrollTo";
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import Roadmap from "./components/Roadmap/Roadmap";
function App() {
    return (
        <div className="App">
            <Container fluid className="app-main-container">
                <CustomNavbar scrollHandler={handleScroll}></CustomNavbar>
                <Hero />
                <AboutUs />
                <Roadmap />
            </Container>
        </div>
    );
}

export default App;
