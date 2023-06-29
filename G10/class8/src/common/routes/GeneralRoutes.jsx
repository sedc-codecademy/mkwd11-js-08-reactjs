import Layout from "../../components/Layout/Layout";
import Shop from "../../components/Shop/Shop";

const GeneralRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <Shop />,
    },
  ],
};

export default GeneralRoutes;
