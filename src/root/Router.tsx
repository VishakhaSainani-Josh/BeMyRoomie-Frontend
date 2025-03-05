import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routes, RoutesType } from './routesConfig';
import PrivateRoutes from './PrivateRoutes';
import Layout from "@/shared/HOC/Layout";

const generateRoutes = (routes: RoutesType[]) => {
  return routes.map(({ path, element, isProtected, includeLayout }) => {
    let wrappedElement = element;

    if (isProtected) {
      wrappedElement = <PrivateRoutes>{wrappedElement}</PrivateRoutes>; //wrapping krni hai Protected se
    }

    if (includeLayout) {
      wrappedElement = <Layout>{wrappedElement}</Layout>;
    }

    return { path, element: wrappedElement };
  });
};

const Router = () => {
  const router = createBrowserRouter(generateRoutes(routes));
  return <RouterProvider router={router} />;
};

export default Router;
