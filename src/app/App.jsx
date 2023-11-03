
import { Outlet } from "react-router-dom";
import NavBar from "../Components/Menu/Navbar";


function App() {

  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
