import { createBrowserRouter } from "react-router-dom";

import Select from "../page/Select";
import Search from "../page/Search";
import Result from "../page/Result";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Select />,
  },
  {
    path: "/search/:id",
    element: <Search />,
  },
  {
    path: "/result",
    element: <Result />,
  },
]);
