import "./App.css";
import MainPage from "./Pages/MainPage";
import { Switch, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
heroku status