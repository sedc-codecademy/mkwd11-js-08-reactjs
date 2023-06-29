import { useRoutes } from "react-router-dom";
import GeneralRoutes from "./GeneralRoutes";

export default function Routes() {
  return useRoutes([GeneralRoutes]);
}
