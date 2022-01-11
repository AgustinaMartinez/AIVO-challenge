import GlobalStyle from './themes/GlobalStyle';
import Layout from './templates/Layout.js';
import { Home, Login, NotFound } from './pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppProvider } from './context';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Auth0Provider
      domain="dev-ksyp95es.us.auth0.com"
      clientId="an9NH5A5LRqGmNKPtXVe5dwhh71JNLr7"
      redirectUri="http://localhost:3000/home"
    >
      <AppProvider>
        <Router>
        <GlobalStyle/>
          <Layout>
            <Switch>
              {isAuthenticated
                ? <Route exact path="/home" component={Home} />
                : <Route exact path="/" component={Login} />}
              <Route path="*" component={NotFound} />
            </Switch>
          </Layout>
        </Router>
      </AppProvider>
    </Auth0Provider>
  );
};

export default App;


// {
//   "short_name": "React App",
//   "name": "Create React App Sample",
//   "icons": [],
//   "start_url": ".",
//   "display": "standalone",
//   "theme_color": "#000000",
//   "background_color": "#ffffff"
// }
