import GlobalStyle from './themes/GlobalStyle';
import Layout from './templates/Layout.js';
import { Home, Login, NotFound } from './pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppProvider } from './context';
import { useAuth0 } from '@auth0/auth0-react';

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <AppProvider>
      <Router>
      <GlobalStyle/>
        <Layout>
          
            {isLoading
              ? <img alt="loading" src="http://auxiliadoravaldivia.cl/colegio/load.gif" style={{ width: '80%', marginLeft: '10%' }} />
              : <Switch>
                {isAuthenticated
                ? <Route exact path="/home" component={Home} />
                : <Route exact path="/" component={Login} />}
                <Route path="*" component={NotFound} />
              </Switch>
            }
        </Layout>
      </Router>
    </AppProvider>
  );
};

export default App;
