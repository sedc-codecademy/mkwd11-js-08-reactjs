import Layout from "../../components/Layout";
import AddsList from "../../components/AddsList";
import AddDetails from "../../components/AddDetails";
import AddForm from "../../components/AddForm";

const GeneralRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "",
      element: <AddsList />,
    },
    {
      path: "adds/:id",
      element: <AddDetails />,
    },
    {
      path: "form",
      element: <AddForm />,
    },
    {
      path: "form/:id",
      element: <AddForm />,
    },
    {
      path: "*",
      element: <h1>Page Not Found</h1>,
    },
  ],
};

export default GeneralRoutes;
