import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home";
import Introduce from "../pages/Introduce/Introduce";
import Login_Register from "../pages/Login_Register/Login_Register";
import Profile from "../pages/Profile/Profile";
import Service from "../pages/Service/Service";

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/login_register", component: Login_Register, style: null },
  { path: "/introduce", component: Introduce },
  { path: "/contact", component: Contact },
  { path: "/profile", component: Profile },
  { path: "/service", component: Service },
];

export default publicRoutes;
