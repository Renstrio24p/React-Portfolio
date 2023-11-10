import { Outlet } from "react-router-dom";
import Navbar from "./components/elements/navbar";
import Footer from "./components/elements/footer";
import { useEffect } from "react";


export default function Start() {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

