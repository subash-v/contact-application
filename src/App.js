import { Route, Switch, BrowserRouter } from "react-router-dom";
import ContactListContainer from "./containers/ContactListContainer";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={ContactListContainer} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
