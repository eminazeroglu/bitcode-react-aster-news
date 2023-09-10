import { useRoutes } from "react-router-dom";
import routes from "../router/routes";

function GlobalProvider() {

    const RouterComponent = () => useRoutes(routes)

    return (
        <>
            <RouterComponent/>
        </>
    );
}

export default GlobalProvider;