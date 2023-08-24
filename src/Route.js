import { Route, Switch, useHistory } from "react-router-dom";
import Navbar from "./components/Navbar/Nav";
import { Security, SecureRoute, LoginCallback } from "@okta/okta-react";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { oktaAuthConfig } from "./config";
import { OktaAuth, toRelativeUrl } from "@okta/okta-auth-js";



const oktaAuth = new OktaAuth(oktaAuthConfig.oidc);

const Routes = () => {
	const history = useHistory();
	const originalUri = async (_oktaAuth, originalUri) => {
		history.replace(toRelativeUrl(originalUri || "/", window.location.origin));
	};

	return (
		<Security oktaAuth={oktaAuth} restoreOriginalUri={originalUri}>
			<Navbar />
			<Switch>
				<Route path="/" exact={true} component={Home} />
				<SecureRoute path="/profile" component={Profile} />
				<Route path="/implicit/callback" component={LoginCallback} />
			</Switch>
		</Security>
	);
};

export default Routes;
