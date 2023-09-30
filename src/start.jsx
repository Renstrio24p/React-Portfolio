import { Outlet } from "react-router-dom";
import Navbar from "./components/elements/navbar";
import Footer from "./components/elements/footer";


export default function Start() {

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

