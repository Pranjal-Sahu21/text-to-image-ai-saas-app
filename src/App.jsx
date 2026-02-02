import { Route, Routes } from "react-router-dom";
import BuyCredit from "./pages/BuyCredit";
import Home from "./pages/Home";
import Result from "./pages/Result";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen px-4 sm:px-10 md:px-14 lg:px-28 bg-black bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-size-[20px_20px] text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
      </Routes>
    </div>
  );
};

export default App;
