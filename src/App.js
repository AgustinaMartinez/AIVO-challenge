import GlobalStyle from './themes/GlobalStyle';
import Layout from './templates/Layout.js';
import { Home, Login, NotFound } from './pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Router>
      <GlobalStyle/>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
};

export default App;