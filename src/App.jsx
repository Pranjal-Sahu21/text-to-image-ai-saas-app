import { Route, Routes } from "react-router-dom";
import BuyCredit from "./pages/BuyCredit";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Generate from "./pages/Generate";
import Login from "./components/Login";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import { Slide, ToastContainer } from "react-toastify";
import NotFound from "./components/NotFound";

const App = () => {
  const { showLogin } = useContext(AppContext);
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        pauseOnHover={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        theme="dark"
        transition={Slide}
      />
      <Navbar />
      {showLogin && <Login />}
      <div className="min-h-full px-4 sm:px-10 md:px-14 lg:px-28 bg-black bg-[radial-gradient(#27272a_1px,transparent_1px)] bg-size-[20px_20px] text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/generate"
            element={
              <ProtectedRoute>
                <Generate />
              </ProtectedRoute>
            }
          />
          <Route path="/buy" element={<BuyCredit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
