import Home from "./Home";
import Blog from "./Blog";
import Category from "./Category";
import Contact from "./Contact";
import Nav from "./Nav";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/blog", element: <Blog /> },
    { path: "/category", element: <Category /> },
    { path: "/contact", element: <Contact /> },
    { path: "/Nav", element: <Nav /> },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
