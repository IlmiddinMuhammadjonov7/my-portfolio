import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./util/Layout";
import OneGetItem from "./pages/OneGetItem";
import Home from "./pages/Home";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/invoice/:id",
          element: <OneGetItem />,
        },
      ],
    },
  ]);
  return (
    <div className="flex min-h-full 1285:flex-col 1285:w-full ">
        <RouterProvider router={routes} />
    </div>
  );
}

export default App;
