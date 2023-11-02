import './App.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./router/index.jsx";
import StudentContext from "./context/StudentContext.jsx";

function App() {
  return (
    <>
      <StudentContext>
        <RouterProvider router={router} />
      </StudentContext>
    </>
  )
}

export default App
