import './App.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./router/index.jsx";
import StudentContext from "./context/StudentContext.jsx";
import {ThemeProvider} from "./components/theme-provider.jsx";
import {Toaster} from "./components/ui/sonner.jsx";

function App() {
  return (
    <>
      <StudentContext>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
          <RouterProvider router={router}/>
        </ThemeProvider>
      </StudentContext>
      <Toaster/>
    </>
  )
}

export default App
