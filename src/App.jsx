//Pages
import Home from './Pages/Home';
import FaleConosco from './Pages/FaleConosco';
import Dentistas from './Pages/Dentistas';
import Fundadores from './Pages/Fundadores';
import Page404 from './Pages/Page404';

//importando o React-Router-Dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Portal from './Pages/Portal';

//Context
import { AuthProvider } from './Components/ValidaLogin/Context';
import RoutePrivat from './Components/ValidaLogin/RoutePrivat';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" children={<Home />} />
          <Route exact path="/faleconosco" children={<FaleConosco />} />
          <Route exact path="/dentistas" children={<Dentistas />} />
          <RoutePrivat exact path="/portal/*" component={Portal} />
          <RoutePrivat exact path="/portal" component={<Portal />} />
          <Route exact path="/fundadores" children={<Fundadores />} />
          <Route exact path="*" children={<Page404 />} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
