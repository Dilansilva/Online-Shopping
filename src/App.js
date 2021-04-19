import HomePage from './pages/HomePage/HomePage';
//import HeaderComponent from './pages/HeaderComponent';
import SignUp from './pages/Sign-Up/Sign-Up';
import EmailVerification from './pages/Email-Verification/EmailVerification';
import EnterEmail from './pages/EnterEmail/EnterEmail';
//import ChangePassword from './pages/ChangePassword/ChangePassword';//import Change Password Web Page
//import HomeBuyer from './pages/Home(Buyer)/HomeBuyer';//home page for buyer
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
            <Route path="/signup">
              <SignUp/>
            </Route>
              <Route path="/emailverify">
                <EmailVerification/>
              </Route>
                <Route path="/emailenter">
                  <EnterEmail/>
                </Route>
                 
        </Switch>
      </div>
    </Router>
  );
}

export default App;
