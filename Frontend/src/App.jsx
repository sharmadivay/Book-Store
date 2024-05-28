import Home from "./Home/Home";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Courses from "./Courses/Courses";
import Signup from "./components/Signup";
import { useAuth } from "./context/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  const ele = authUser ? <Courses/> : <Navigate to="/signup"/>
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/course",
      element:ele,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
