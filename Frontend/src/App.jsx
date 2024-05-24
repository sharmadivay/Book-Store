import Home from "./Home/Home"

import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Courses from "./Courses/Courses";
import Signup from "./components/Signup";



function App() {
  const router = createBrowserRouter([
    {
      path : "/",
      element : <Home/>
    },
    {
      path : "/course",
      element : <Courses/>
    },
    {
      path : "/signup",
      element : <Signup/>
    }
  ])
  return (
    <div className="dark:bg-slate-900 dark:text-white">
    
    <RouterProvider router={router}/>
    </div>
  )
}

export default App

