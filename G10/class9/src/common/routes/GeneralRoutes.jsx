import Layout from "../../components/Layout/Layout";
import Cart from "../../components/Shop/Cart";
import Shop from "../../components/Shop/Shop";

const GeneralRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Shop />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ],
};

export default GeneralRoutes;
