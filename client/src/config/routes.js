import { LandingPage } from "../pages";

const routes = [
  {
    path: "/",
    component: <LandingPage />,
  },
  {
    path: "/*",
    component: <LandingPage />,
  },
];

export default routes;
