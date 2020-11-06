import "./App.css";
import MainPage from "./Pages/MainPage";
import WelcomePage from "./Pages/WelcomePage";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={WelcomePage} />
          <Route exact path="/home" component={MainPage}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
