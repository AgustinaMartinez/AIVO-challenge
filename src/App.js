import GlobalStyle from './themes/GlobalStyle';
import Layout from './templates/Layout.js';
import { Home, Login, NotFound } from './pages';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AppProvider } from './context';

const App = () => {
  return (
    <AppProvider>
      <Router>
      <GlobalStyle/>
        <Layout>
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Layout>
      </Router>
    </AppProvider>
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
