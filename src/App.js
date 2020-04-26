import React from 'react';
import Layout from "./layout/Layout";
import ComponentsPage from "./pages/ComponentsPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import WidgetsPage from "./pages/WidgetsPage";

function App() {
  return (
		<Layout>
			<BrowserRouter>
				<Switch>
					<Route exact path = "/" component = {HomePage}/>
					<Route path = "/articles" component = {ArticlePage} />
					<Route path = "/components" component = {ComponentsPage} />
					<Route path= "/widgets" component={WidgetsPage} />
					<Route path= "/about" component={AboutPage}/>
					<Route path="/contact" component={ContactPage}/>
					<Route component={NotFoundPage}/>
				</Switch>
			</BrowserRouter>
		</Layout>
  );
}

export default App;
