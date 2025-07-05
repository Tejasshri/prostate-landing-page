import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ExpertCare from "./components/ExpertCare";
import WhyItHappens from "./components/WhyItHappens";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <Navbar />
      <Banner />
      <ExpertCare />
      <WhyItHappens />
    </div>
  );
}

export default App;
