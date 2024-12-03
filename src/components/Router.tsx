import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { Layout } from "./Layout";
import { EventsPage } from "../pages/events/EventsPage";
import { SingleEventPage } from "../pages/singleEvent/SingleEventPage";
import { ROUTES } from "../const";

export function Router() {
  return <RouterProvider router={routes} />;
}

const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: ROUTES.home,
        element: <HomePage />,
      },
      {
        path: ROUTES.events,
        element: <EventsPage />,
      },
      {
        path: `${ROUTES.events}/:id`,
        element: <SingleEventPage />,
      },
    ],
  },
  {
    path: "/*",
    element: <Navigate to={"/home"} />,
  },
  {
    path: "/error",
    element: <h1>Error page...</h1>,
  },
]);
