import { Outlet } from "react-router-dom";
import Navbar from "./components/elements/navbar";


export default function Start() {

  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  )
}

