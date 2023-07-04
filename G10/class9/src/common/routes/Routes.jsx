import { useRoutes } from "react-router-dom";
import GeneralRoutes from "./GeneralRoutes";
import AuthRoutes from "./AuthRoutes";

export default function Routes() {
  return useRoutes([GeneralRoutes, AuthRoutes]);
}
