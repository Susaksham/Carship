import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import { RouterProvider } from "react-router-dom";
import SubscriptionPage from "./pages/SubscriptionPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>,
  },
  {
    path: "subscribe",
    element: <SubscriptionPage></SubscriptionPage>,
  },
  {
    path: "login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "signup",
    element: <SignUpPage></SignUpPage>,
  },
  {
    path: "*",
    element: <h1 className="text-6xl m-auto">Error Page</h1>,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
