import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { New } from "../components/pages/New";
import { Page404 } from "../components/pages/Page404";
import { Profile } from "../components/pages/Profile";
import { Signup } from "../components/pages/Signup";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    path: "/login",
    exact: false,
    children: <Login />
  },
  {
    path: "/signup",
    exact: false,
    children: <Signup />
  },
  {
    path: "/new",
    exact: false,
    children: <New />
  },
  {
    path: "/profile",
    exact: false,
    children: <Profile />
  },
  {
    path: "*",
    exact: false,
    children: <Page404 />
  }
];