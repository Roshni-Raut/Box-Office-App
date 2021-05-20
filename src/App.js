import React from 'react';
import { Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        This is Home page
      </Route>
      <Route exact path="/starred">
        This is Starred
      </Route>
      <Route>
        This is 404 Page
      </Route>
    </Switch>
  );
}

export default App;
