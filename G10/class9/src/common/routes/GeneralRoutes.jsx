import Layout from "../../components/Layout/Layout";
import Cart from "../../components/Shop/Cart";
import Shop from "../../components/Shop/Shop";
import ProtectedRoute from "./ProtectedRoute";

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
      element: (
        <ProtectedRoute>
          <Cart />
        </ProtectedRoute>
      ),
    },
  ],
};

export default GeneralRoutes;
